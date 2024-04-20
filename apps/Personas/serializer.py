from .models import Beneficiario, Patrocinador
from rest_framework import serializers


class BeneficiarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beneficiario
        fields = '__all__'


class PatrocinadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patrocinador
        fields = '__all__'
