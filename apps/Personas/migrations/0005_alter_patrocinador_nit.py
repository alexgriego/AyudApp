# Generated by Django 5.0.3 on 2024-04-20 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Personas', '0004_patrocinador'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patrocinador',
            name='NIT',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
