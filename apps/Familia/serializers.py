from rest_framework import serializers
from .models import Familia, BeneficiariosFamilia
from apps.Personas.models import Beneficiario


class FamiliaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Familia
        fields = '__all__'


class BeneficiariosFamiliaSerializer(serializers.ModelSerializer):
    beneficiario = serializers.SerializerMethodField('get_beneficiario')

    class Meta:
        model = BeneficiariosFamilia
        fields = '__all__'

    def get_beneficiario(self, obj):
        return [{
            'identificacio': obj.beneficiario.identificacion,
            'nombre': obj.beneficiario.nombre,
            'apellido': obj.beneficiario.apellido,
        }]
