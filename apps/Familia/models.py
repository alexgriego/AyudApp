from django.db import models
from apps.Personas.models import Beneficiario


class Familia(models.Model):
    beneficiario = models.ForeignKey(
        Beneficiario, on_delete=models.CASCADE, null=True, blank=True)
    es_cabeza = models.BooleanField(default=False)
    cantidad_personas = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f'{self.beneficiario.nombre} {self.beneficiario.apellido}'


class BeneficiariosFamilia(models.Model):
    familia = models.ForeignKey(
        Familia, on_delete=models.CASCADE, null=True, blank=True)
    beneficiario = models.ForeignKey(
        Beneficiario, on_delete=models.CASCADE, null=True, blank=True, unique=True)
    parentesco = models.CharField(max_length=100, default='Hijo')
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f'{self.beneficiario} - {self.familia}'
