from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apps.Familia.models import BeneficiariosFamilia
from core.permissions import admin_or_encuenstador_required,admin_or_encuenstador_or_bodeguista_required
from .serializer import BeneficiarioSerializer, PatrocinadorSerializer
from .models import Beneficiario, Patrocinador
from django.db.models import Q


class BeneficiarioAPI(APIView):
    def get_beneficiarios(self):
        return Beneficiario.objects.order_by('-created_at')[:10]

    def get_beneficiario(self, pk):
        return Beneficiario.objects.filter(identificacion__istartswith=pk)

    def find_beneficiario(self, pk):
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
        beneficiario = self.find_beneficiario(pk)
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


class PatrocinadoresAPI(APIView):
    def get_patrocinadores(self):
        return Patrocinador.objects.order_by('-created_at')[:10]

    def get_patrocinador(self, pk):
        return Patrocinador.objects.filter(NIT__istartswith=pk)

    def find_patrocinador(self, pk):
        return Patrocinador.objects.get(NIT=pk)

    @admin_or_encuenstador_or_bodeguista_required
    def get(self, request, pk=None, format=None):
        queryset = self.get_patrocinador(
            pk) if pk else self.get_patrocinadores()
        print(queryset)
        serializer = PatrocinadorSerializer(
            queryset, many=True)
        return Response(serializer.data)

    @admin_or_encuenstador_required
    def post(self, request, format=None):
        serializer = PatrocinadorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @admin_or_encuenstador_required
    def put(self, request, pk, format=None):
        patrocinador = self.find_patrocinador(pk)
        serializer = PatrocinadorSerializer(patrocinador, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @admin_or_encuenstador_required
    def delete(self, request, pk, format=None):
        patrocinador = self.get_patrocinador(pk)
        patrocinador.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DetalleBeneficiarioAPI(APIView):
    @admin_or_encuenstador_required
    def get(self, request, pk):
        queryset = Beneficiario.objects.get(identificacion=pk)
        q = BeneficiariosFamilia.objects.get(beneficiario=queryset)
        data = {
            'tipo_iden': queryset.tipo_id,
            'identificacion': queryset.identificacion,
            'nombre': queryset.nombre,
            'apellido': queryset.apellido,
            'parentesco': q.parentesco,
        }
        return Response(data, status=status.HTTP_200_OK)


class PatrocinadorSearch(APIView):
    def get_patrocinador(self, pk):
        return Patrocinador.objects.get(Q(NIT=pk) | Q(nombre=pk))
