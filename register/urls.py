
from django.urls import path
from .views import formulario, export_page, export_data_api

urlpatterns = [
    path('', formulario, name='formulario'),
    path('export/', export_page, name='export_page'),
    path('api/export/', export_data_api, name='export_data_api'),
]
