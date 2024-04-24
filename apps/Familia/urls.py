from django.urls import path as p
from . import views as v
from rest_framework.urlpatterns import format_suffix_patterns as fsp

urlpatterns = [
    # APIS de familias
    p('familias/', v.FamiliaAPI.as_view()),
    p('familias/<str:pk>/', v.FamiliaAPI.as_view()),
    p('familias/detalles/<str:pk>/', v.FamiliaDetailAPI.as_view()),
    p('familias/datos/<str:pk>/', v.DatosFamiliaAPI.as_view()),
]

urlpatterns = fsp(urlpatterns)
