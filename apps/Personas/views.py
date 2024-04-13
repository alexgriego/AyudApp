from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from core.permissions import admin_or_encuenstador_required
from .serializer import BeneficiarioSerializer
from .models import Beneficiario


class BeneficiarioAPI(APIView):
    def get_beneficiarios(self):
        return Beneficiario.objects.order_by('-created_at')[:10]

    def get_beneficiario(self, pk):
        return Beneficiario.objects.get(identificacion=pk)

    @admin_or_encuenstador_required
    def get(self, request, pk=None, format=None):
        queryset = self.get_beneficiario(
            pk) if pk else self.get_beneficiarios()
        serializer = BeneficiarioSerializer(
            queryset, many=True)
        return Response(serializer.data)

    @admin_or_encuenstador_required
    def post(self, request, format=None):
        serializer = BeneficiarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @admin_or_encuenstador_required
    def put(self, request, pk, format=None):
        beneficiario = self.get_beneficiario(pk)
        serializer = BeneficiarioSerializer(beneficiario, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @admin_or_encuenstador_required
    def delete(self, request, pk, format=None):
        beneficiario = self.get_beneficiario(pk)
        beneficiario.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # Create your views here.
