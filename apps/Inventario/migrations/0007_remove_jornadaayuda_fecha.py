# Generated by Django 5.0.3 on 2024-04-21 22:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Inventario', '0006_alter_jornadaayuda_fecha_inicio'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jornadaayuda',
            name='fecha',
        ),
    ]
