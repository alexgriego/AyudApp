from django.db import models
from apps.Personas.models import Patrocinador


class Producto(models.Model):
    codigo = models.CharField(max_length=100, primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(null=True, blank=True)
    cantidad = models.IntegerField(default=1)
    tipo = models.CharField(max_length=100, default='Alimento')
    es_perecedero = models.BooleanField(default=False)
    fecha_vencimiento = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return self.nombre


class Dinero(models.Model):
    patrocinador = models.ForeignKey(
        Patrocinador, on_delete=models.SET_NULL, null=True, blank=True)
    cantidad = models.DecimalField(max_digits=100, decimal_places=2)
    fecha = models.DateField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f'{self.cantidad} - {self.patrocinador}'


class JornadaAyuda(models.Model):
    fecha = models.DateField(auto_now=True)
    descripcion = models.TextField(null=True, blank=True)
    nombre = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f'{self.nombre}'


class DineroJornada(models.Model):
    jornada = models.ForeignKey(JornadaAyuda, on_delete=models.CASCADE)
    dinero = models.ForeignKey(Dinero,
                               on_delete=models.SET_NULL, null=True, blank=True, unique=True)
    cantidad = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f'{self.jornada} - {self.dinero.patrocinador.nombre}'


class ProductoJornada(models.Model):
    jornada = models.ForeignKey(JornadaAyuda, on_delete=models.CASCADE)
    producto = models.ForeignKey(
        Producto, on_delete=models.SET_NULL, null=True, blank=True)
    cantidad = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f'{self.jornada} - {self.producto.nombre}'
