# Generated by Django 5.0.3 on 2024-04-21 13:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Inventario', '0003_alter_producto_tipo'),
        ('Personas', '0005_alter_patrocinador_nit'),
    ]

    operations = [
        migrations.CreateModel(
            name='JornadaAyuda',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(auto_now=True)),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('nombre', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.CharField(default='admin', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Dinero',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.DecimalField(decimal_places=2, max_digits=100)),
                ('fecha', models.DateField(auto_now=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.CharField(default='admin', max_length=100)),
                ('patrocinador', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Personas.patrocinador')),
            ],
        ),
        migrations.CreateModel(
            name='DineroJornada',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.CharField(default='admin', max_length=100)),
                ('dinero', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Inventario.dinero', unique=True)),
                ('jornada', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Inventario.jornadaayuda')),
            ],
        ),
        migrations.CreateModel(
            name='ProductoJornada',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField(default=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.CharField(default='admin', max_length=100)),
                ('jornada', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Inventario.jornadaayuda')),
                ('producto', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Inventario.producto')),
            ],
        ),
    ]
