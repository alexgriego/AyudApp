from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apps.Personas.models import Patrocinador
from core.permissions import admin_or_bodeguista_required, admin_required
from .models import Producto, Dinero, JornadaAyuda
from .serializers import ProductoSerializer, DineroSerializer, JornadaAyudaSerializer
from django.db.models import Q
from datetime import datetime as dt
# APIS de inventario


class ProductoAPI(APIView):
    def get_productos(self):
        return Producto.objects.order_by('-created_at')[:10]

    def get_producto(self, pk):
        return Producto.objects.filter(Q(codigo__icontains=pk) | Q(nombre__icontains=pk))

    def find_producto(self, pk):
        return Producto.objects.get(codigo=pk)

    @ admin_or_bodeguista_required
    def get(self, request, pk=None, format=None):
        queryset = self.get_producto(
            pk) if pk else self.get_productos()
        serializer = ProductoSerializer(
            queryset, many=True)
        return Response(serializer.data)

    @ admin_or_bodeguista_required
    def post(self, request, format=None):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @ admin_or_bodeguista_required
    def put(self, request, pk, format=None):
        producto = self.find_producto(pk)
        serializer = ProductoSerializer(producto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @ admin_or_bodeguista_required
    def delete(self, request, pk, format=None):
        producto = self.get_producto(pk)
        producto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# APIS de Ayuda economica
class DineroAPI(APIView):
    def get_dineros(self):
        return Dinero.objects.order_by('-created_at')[:10]

    def get_dinero(self, pk):
        return Dinero.objects.filter(Q(id=pk) | Q(patrocinador__nombre__icontains=pk) | Q(patrocinador__NIT__icontains=pk)).order_by('-created_at')

    def find_dinero(self, pk):
        return Dinero.objects.get(patrocinador__NIT=pk)

    def find_dinero_by_id(self, pk):
        return Dinero.objects.get(id=pk)

    @ admin_required
    def get(self, request, pk=None, format=None):
        queryset = self.get_dinero(
            pk) if pk else self.get_dineros()
        serializer = DineroSerializer(
            queryset, many=True)
        return Response(serializer.data)

    @admin_required
    def post(self, request):
        print('post')
        data = request.data
        try:
            aux = Dinero.objects.filter(
                patrocinador__NIT=data['patrocinador']).count()
            if aux > 0:
                print('existe')
                q = Dinero.objects.get(patrocinador__NIT=data['patrocinador'])
                print('encontrado')
                print(data['cantidad'])
                print(q.cantidad)
                q.cantidad += int(data['cantidad'])
                print('sumado')
            else:
                q = {
                    'patrocinador': Patrocinador.objects.get(NIT=data['patrocinador']),
                    'cantidad': data['cantidad'],
                    'created_by': request.user.username
                }
                q = Dinero(**q)
            q.save()
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    @admin_required
    def put(self, request, pk, format=None):
        dinero = self.find_dinero_by_id(pk)
        serializer = DineroSerializer(dinero, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @admin_required
    def delete(self, request, pk, format=None):
        dinero = self.find_dinero_by_id(pk)
        dinero.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class JornadaAyudaAPI(APIView):
    def get_jornadas(self):
        return JornadaAyuda.objects.order_by('-created_at')[:10]

    def get_jornada(self, pk):
        return JornadaAyuda.objects.filter(nombre__icontains=pk).order_by('-created_at')

    @admin_or_bodeguista_required
    def get(self, request, pk=None, format=None):
        queryset = self.get_jornada(
            pk) if pk else self.get_jornadas()
        serializer = JornadaAyudaSerializer(
            queryset, many=True)
        return Response(serializer.data)

    @admin_or_bodeguista_required
    def post(self, request, format=None):
        data = request.data
        q = {
            'nombre': data['nombre'],
            'descripcion': data['descripcion'],
            'fecha_inicio': dt.now().date(),
            'es_finalizado': False,
            'created_by': request.user.username
        }
        if data['fondos']:
            aux = Dinero.objects.get(pk=data['fondos'])
            q['fondos'] = aux
            q['cantidad_fondos'] = data['cantidad_fondos']
            aux.cantidad -= data['cantidad_fondos']
        if data['producto']:
            aux = Producto.objects.get(codigo=data['producto'])
            q['producto'] = aux
            q['cantidad_producto'] = data['cantidad_producto']
            aux.cantidad -= data['cantidad_producto']
        q = JornadaAyuda(**q)
        try:
            q.save()
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class JornadasAPI(APIView):
    def find_jornada(self, pk):
        return JornadaAyuda.objects.get(id=pk)

    @admin_or_bodeguista_required
    def get(self, request, pk=None, format=None):
        queryset = self.find_jornada(pk)
        serializer = JornadaAyudaSerializer(
            queryset)
        return Response(serializer.data)

    @admin_or_bodeguista_required
    def put(self, request, pk, format=None):
        jornada = self.find_jornada(pk)
        print(jornada)
        if dinero := jornada.fondos or None:
            aux = Dinero.objects.get(pk=dinero.id)
            aux.cantidad -= jornada.cantidad_fondos
            aux.save()
        if producto := jornada.producto or None:
            aux = Producto.objects.get(codigo=producto.codigo)
            aux.cantidad -= jornada.cantidad_producto
            aux.save()
        jornada.es_finalizado = True
        jornada.fecha_fin = dt.now().date()
        jornada.save()
        return Response(status=status.HTTP_200_OK)

    @admin_or_bodeguista_required
    def delete(self, request, pk, format=None):
        jornada = self.find_jornada(pk)
        jornada.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class JornadasProductos(APIView):
    def get(self, request, pk,format=None):
        queryset = Producto.objects.filter(  (Q(codigo__icontains=pk) | Q(nombre__icontains=pk)) & Q(jornadaayuda__es_finalizado=True) | Q(jornadaayuda__isnull=True))
        print(queryset)
    
        serializer = ProductoSerializer(queryset, many=True)
        return Response(serializer.data)
