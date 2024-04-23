from rest_framework import serializers
from .models import Producto, Dinero, JornadaAyuda

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'


class DineroSerializer(serializers.ModelSerializer):
    patrocinador = serializers.SerializerMethodField('get_patrocinador')

    class Meta:
        model = Dinero
        fields = '__all__'

    def get_patrocinador(self, obj):
        return obj.patrocinador.nombre if obj.patrocinador is not None else None


class JornadaAyudaSerializer(serializers.ModelSerializer):
    class Meta:
        model = JornadaAyuda
        fields = '__all__'
        