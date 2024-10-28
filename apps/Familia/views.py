from django.shortcuts import render

from apps.Personas.models import Beneficiario
from .serializers import FamiliaSerializer, BeneficiariosFamiliaSerializer
from .models import Familia, BeneficiariosFamilia
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from core.permissions import admin_or_encuenstador_required
from django.db.models import Q


class FamiliaAPI(APIView):
    def get_familias(self):
        return Familia.objects.order_by('-created_at')[:10]

    def get_familia(self, pk):
        return Familia.objects.filter(beneficiario__identificacion=pk)

    @admin_or_encuenstador_required
    def get(self, request, pk=None):
        if pk:
            queryset = self.get_familia(pk)
            serializer = FamiliaSerializer(queryset)
        else:
            queryset = self.get_familias()
            serializer = FamiliaSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @admin_or_encuenstador_required
    def post(self, request, format=None):
        lider = request.data['lider']
        relacionados = request.data['relacionados']
        find = Familia.objects.filter(beneficiario__identificacion=lider)
        if find.exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        q = Familia(
            beneficiario=Beneficiario.objects.get(identificacion=lider),
            cantidad_personas=len(relacionados),
            es_cabeza=True
        )
        q.save()
        r = Beneficiario.objects.get(identificacion=lider)
        r.es_censado = True
        r.save()
        if len(relacionados) > 0:
            for item in relacionados:
                iden = item['identificacion']
                parent = item['parentezco']
                q = BeneficiariosFamilia(
                    familia=Familia.objects.get(
                        beneficiario__identificacion=lider),
                    beneficiario=Beneficiario.objects.get(identificacion=iden),
                    parentesco=parent
                )
                s = Beneficiario.objects.get(identificacion=iden)
                s.es_censado = True
                s.save()
                q.save()
        return Response(status=status.HTTP_201_CREATED)

    @admin_or_encuenstador_required 
    def put(self,request):
        lider = request.data['lider']
        relacionados = request.data['relacionados']
        familia = Familia.objects.get(beneficiario__identificacion=lider)
        familia.cantidad_personas += len(relacionados)
        if len(relacionados) > 0:
            for item in relacionados:
                print("item",item)
                iden = item['identificacion']
                parent = item['parentezco']
                q = BeneficiariosFamilia(
                    familia=Familia.objects.get(
                        beneficiario__identificacion=lider),
                    beneficiario=Beneficiario.objects.get(identificacion=iden),
                    parentesco=parent
                )
                s = Beneficiario.objects.get(identificacion=iden)
                s.es_censado = True
                s.save()
                q.save()
        return  Response(status=status.HTTP_200_OK)

class FamiliaDetailAPI(APIView):
    @admin_or_encuenstador_required
    def get(self, request, pk):
        """obtengo todos los registros de BeneficiariosFamilia donde la familia sea igual a pk
        teniendo en cuenta que cada familia tiene varios beneficiarios"""
        queryset = BeneficiariosFamilia.objects.filter(familia=pk)
        data = [item.beneficiario.identificacion for item in queryset]
        return Response(data, status=status.HTTP_200_OK)

    @admin_or_encuenstador_required
    def delete(self, request, pk):
        q = BeneficiariosFamilia.objects.filter(familia=pk).first()
        queryset = Familia.objects.get(id=q.familia.id)
        p = BeneficiariosFamilia.objects.filter(familia=pk)
        for item in p:
            r = Beneficiario.objects.get(
                identificacion=item.beneficiario.identificacion)
            r.es_censado = False
            r.save()
            item.delete()
        s = Beneficiario.objects.get(identificacion=queryset.beneficiario.identificacion)
        s.es_censado = False
        s.save()
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DatosFamiliaAPI(APIView):
    @admin_or_encuenstador_required
    def get(self, request, pk):
        queryset = Familia.objects.get(id=pk)
        q = Beneficiario.objects.get(
            identificacion=queryset.beneficiario.identificacion)
        data = {
            'lider': q.identificacion,
            'nombre': q.nombre,
            'apellido': q.apellido,
            'telefono': q.telefono,
            'direccion': q.direccion,
            'cantidad_personas': queryset.cantidad_personas,
            'es_cabeza': queryset.es_cabeza
        }
        return Response(data, status=status.HTTP_200_OK)

    @admin_or_encuenstador_required
    def delete(self, request, pk):
        queryset = BeneficiariosFamilia.objects.get(
            beneficiario__identificacion=pk)
        q = Beneficiario.objects.get(identificacion=pk)
        q.es_censado = False
        q.save()
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    @admin_or_encuenstador_required
    def put(self, request, pk):
        data = request.data
        q = Beneficiario.objects.get(identificacion=pk)
        q.es_censado = True
        q.save()
        
        pass
