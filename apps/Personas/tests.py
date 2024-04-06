from django.test import TestCase
from .models import Beneficiario
from datetime import datetime


class BeneficiarioTestCase(TestCase):

    def setUp(self):
        self.beneficiario_data = {
            'tipo_id': 'CC',
            'identificacion': '1234567890',
            'nombre': 'Juan',
            'apellido': 'Perez',
            'fecha_nacimiento': datetime.strptime('2000-01-01', '%Y-%m-%d'),  # Convertimos directamente a datetime
            'genero': 'Masculino',
            'telefono': '1234567890',
            'correo': 'juan.perez@example.com',
            'direccion': 'Calle 123',
            'ciudad': 'Medellin',
            'departamento': 'Antioquia',
            'pais': 'Colombia',
            'edad': 24,
            'es_discapacitado': False,
            'es_victima': False,
            'es_desplazado': False,
            'observaciones': 'Ninguna'
        }

    def test_create_beneficiario(self):
        beneficiario = Beneficiario.objects.create(**self.beneficiario_data)

        self.assertEqual(beneficiario.tipo_id, self.beneficiario_data['tipo_id'])
        self.assertEqual(beneficiario.identificacion, self.beneficiario_data['identificacion'])
        self.assertEqual(beneficiario.nombre, self.beneficiario_data['nombre'])
        self.assertEqual(beneficiario.apellido, self.beneficiario_data['apellido'])
        self.assertEqual(beneficiario.fecha_nacimiento.strftime('%Y-%m-%d'),
                         self.beneficiario_data['fecha_nacimiento'].strftime('%Y-%m-%d'))  # Convertimos fecha_nacimiento a string y luego comparamos
        self.assertEqual(beneficiario.genero, self.beneficiario_data['genero'])
        self.assertEqual(beneficiario.telefono, self.beneficiario_data['telefono'])
        self.assertEqual(beneficiario.correo, self.beneficiario_data['correo'])
        self.assertEqual(beneficiario.direccion, self.beneficiario_data['direccion'])
        self.assertEqual(beneficiario.ciudad, self.beneficiario_data['ciudad'])
        self.assertEqual(beneficiario.departamento, self.beneficiario_data['departamento'])
        self.assertEqual(beneficiario.pais, self.beneficiario_data['pais'])
        self.assertEqual(beneficiario.edad, self.beneficiario_data['edad'])
        self.assertEqual(beneficiario.es_discapacitado, self.beneficiario_data['es_discapacitado'])
        self.assertEqual(beneficiario.es_victima, self.beneficiario_data['es_victima'])
        self.assertEqual(beneficiario.es_desplazado, self.beneficiario_data['es_desplazado'])
        self.assertEqual(beneficiario.observaciones, self.beneficiario_data['observaciones'])

    def test_beneficiario_str(self):
        beneficiario = Beneficiario.objects.create(**self.beneficiario_data)
        expected_string = f"{beneficiario.identificacion} - {beneficiario.nombre} {beneficiario.apellido}"
        self.assertEqual(str(beneficiario), expected_string)
