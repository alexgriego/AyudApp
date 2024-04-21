from django.contrib import admin
from .models import Producto, Dinero, JornadaAyuda, DineroJornada, ProductoJornada
# Register your models here.
admin.site.register(Producto)
admin.site.register(Dinero)
admin.site.register(JornadaAyuda)
admin.site.register(DineroJornada)
admin.site.register(ProductoJornada)
