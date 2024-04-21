from django.db import models


class Producto(models.Model):
    codigo = models.CharField(max_length=100, primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(null=True, blank=True)
    cantidad = models.IntegerField(default=1)
    tipo = models.CharField(max_length=100,default='Alimento')
    es_perecedero = models.BooleanField(default=False)
    fecha_vencimiento = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return self.nombre
