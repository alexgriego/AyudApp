from django.db import models

# Create your models here.


class Beneficiario(models.Model):
    tipo_id = models.CharField(max_length=20, default='CC')
    identificacion = models.IntegerField(max_length=20, primary_key=True)
    nombre = models.CharField(max_length=100)
    estado_civil = models.CharField(max_length=20, default='Soltero(a)')
    apellido = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    genero = models.CharField(max_length=20)
    telefono = models.CharField(max_length=20, default='0')
    correo = models.EmailField(null=True, blank=True)
    direccion = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    departamento = models.CharField(max_length=100)
    pais = models.CharField(max_length=100)
    edad = models.IntegerField(default=0)
    es_discapacitado = models.BooleanField(default=False)
    es_victima = models.BooleanField(default=False)
    es_desplazado = models.BooleanField(default=False)
    observaciones = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self) -> str:
        return f'{self.identificacion} - {self.nombre} {self.apellido}'


class Patrocinador(models.Model):
    NIT = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20, default='0')
    correo = models.EmailField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self) -> str:
        return f'{self.NIT} - {self.nombre}'
