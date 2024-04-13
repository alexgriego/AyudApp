from django.urls import path as p
from rest_framework.urlpatterns import format_suffix_patterns as fsp
from . import views as v

urlpatterns = [
    # APIS de beneficiarios
    p('beneficiarios/', v.BeneficiarioAPI.as_view()),
    p('beneficiarios/<int:pk>/', v.BeneficiarioAPI.as_view()),
]

urlpatterns = fsp(urlpatterns)