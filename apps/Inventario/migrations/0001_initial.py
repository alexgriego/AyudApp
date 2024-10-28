# Generated by Django 5.0.3 on 2024-04-26 03:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Personas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('codigo', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('cantidad', models.IntegerField(default=1)),
                ('tipo', models.CharField(default='Alimento', max_length=100)),
                ('es_perecedero', models.BooleanField(default=False)),
                ('fecha_vencimiento', models.DateField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.CharField(default='admin', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Dinero',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField(default=0)),
                ('fecha', models.DateField(auto_now=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.CharField(default='admin', max_length=100)),
                ('patrocinador', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Personas.patrocinador')),
            ],
        ),
        migrations.CreateModel(
            name='JornadaAyuda',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('nombre', models.CharField(max_length=100)),
                ('fecha_inicio', models.DateField()),
                ('es_finalizado', models.BooleanField(default=False)),
                ('fecha_fin', models.DateField(blank=True, null=True)),
                ('cantidad_producto', models.IntegerField(default=0)),
                ('cantidad_fondos', models.DecimalField(decimal_places=2, default=0, max_digits=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.CharField(default='admin', max_length=100)),
                ('fondos', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Inventario.dinero')),
                ('producto', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Inventario.producto')),
            ],
        ),
    ]