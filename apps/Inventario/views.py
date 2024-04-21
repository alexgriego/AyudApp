from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from core.permissions import admin_or_encuenstador_required
from .models import Producto
from .serializers import ProductoSerializer
from django.db.models import Q


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
            return Response(serializer.data, status=status.HTTP_201_CREATED)
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
