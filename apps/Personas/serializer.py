from .models import Beneficiario
from rest_framework import serializers


class BeneficiarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beneficiario
        fields = '__all__'
