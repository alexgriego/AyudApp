# Generated by Django 5.0.3 on 2024-10-13 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Inventario', '0011_alter_dinero_cantidad'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='patrocinador',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
