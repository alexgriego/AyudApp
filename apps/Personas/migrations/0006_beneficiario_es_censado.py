# Generated by Django 5.0.3 on 2024-04-24 03:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Personas', '0005_alter_patrocinador_nit'),
    ]

    operations = [
        migrations.AddField(
            model_name='beneficiario',
            name='es_censado',
            field=models.BooleanField(default=False),
        ),
    ]
