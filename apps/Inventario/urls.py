from django.urls import path as p
from rest_framework.urlpatterns import format_suffix_patterns as fsp
from . import views as v

urlpatterns = [
    #APIS de productos
    p('productos/', v.ProductoAPI.as_view()),
    p('productos/<str:pk>/', v.ProductoAPI.as_view()),

]

urlpatterns = fsp(urlpatterns)
