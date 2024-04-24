from django.contrib import admin

from .models import Familia, BeneficiariosFamilia

# Register your models here.
admin.site.register(Familia)
admin.site.register(BeneficiariosFamilia)
