from django.urls import path as p
from rest_framework.urlpatterns import format_suffix_patterns as fsp
from . import views as v

urlpatterns = [
    # APIS de productos
    p('productos/', v.ProductoAPI.as_view()),
    p('productos/<str:pk>/', v.ProductoAPI.as_view()),

    # Apis de ayuda economica
    p('dineros/', v.DineroAPI.as_view()),
    p('dineros/<str:pk>/', v.DineroAPI.as_view()),

    # APIS de jornadas
    p('jornadas/', v.JornadaAyudaAPI.as_view()),
    p('jornadas/<str:pk>/', v.JornadaAyudaAPI.as_view()),
    p('jornadas/search/<str:pk>/', v.JornadasAPI.as_view()),

    #Api para consultar si un producto es usado en alguna jornada
    p('jornadas/producto/<str:pk>/', v.JornadasProductos.as_view()),

]

urlpatterns = fsp(urlpatterns)
