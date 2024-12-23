from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # APIS para autenticación
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.jwt')),
    # APIS de Personas
    path('api/v1/personas/', include('apps.Personas.urls')),
    # APIS de Inventario
    path('api/v1/inventario/', include('apps.Inventario.urls')),

    # apis de censos
    path('api/v1/censos/', include('apps.Familia.urls')),
]
"""
urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]

"""

