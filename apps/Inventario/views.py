from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apps.Personas.models import Patrocinador
from core.permissions import admin_or_encuenstador_required
from .models import Producto, Dinero
from .serializers import ProductoSerializer, DineroSerializer
from django.db.models import Q

# APIS de inventario


class ProductoAPI(APIView):
    def get_productos(self):
        return Producto.objects.order_by('-created_at')[:10]

    def get_producto(self, pk):
        return Producto.objects.filter(Q(codigo__icontains=pk) | Q(nombre__icontains=pk))

    def find_producto(self, pk):
        return Producto.objects.get(codigo=pk)

    @ admin_or_encuenstador_required
    def get(self, request, pk=None, format=None):
        queryset = self.get_producto(
            pk) if pk else self.get_productos()
        serializer = ProductoSerializer(
            queryset, many=True)
        return Response(serializer.data)

    @ admin_or_encuenstador_required
    def post(self, request, format=None):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @ admin_or_encuenstador_required
    def put(self, request, pk, format=None):
        producto = self.find_producto(pk)
        serializer = ProductoSerializer(producto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @ admin_or_encuenstador_required
    def delete(self, request, pk, format=None):
        producto = self.get_producto(pk)
        producto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# APIS de Ayuda economica
class DineroAPI(APIView):
    def get_dineros(self):
        return Dinero.objects.order_by('-created_at')[:10]

    def get_dinero(self, pk):
        return Dinero.objects.filter(Q(id=pk) | Q(patrocinador__nombre__icontains=pk)).order_by('-created_at')

    def find_dinero(self, pk):
        return Dinero.objects.get(id=pk)

    @ admin_or_encuenstador_required
    def get(self, request, pk=None, format=None):
        queryset = self.get_dinero(
            pk) if pk else self.get_dineros()
        serializer = DineroSerializer(
            queryset, many=True)
        return Response(serializer.data)

    @ admin_or_encuenstador_required
    def post(self, request, format=None):
        q = Dinero(cantidad=request.data['cantidad'], patrocinador=Patrocinador.objects.get(
            pk=request.data['patrocinador']) if request.data['patrocinador'] else None)
        try:
            q.save()
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    @ admin_or_encuenstador_required
    def put(self, request, pk, format=None):
        dinero = self.find_dinero(pk)
        print(request.data['patrocinador'])
        try:
            dinero.patrocinador = Patrocinador.objects.get(
                pk=request.data['patrocinador']) if request.data['patrocinador'] else None
            dinero.cantidad = request.data['cantidad']
            dinero.save()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    @ admin_or_encuenstador_required
    def delete(self, request, pk, format=None):
        dinero = self.find_dinero(pk)
        dinero.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
