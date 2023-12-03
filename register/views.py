from django.shortcuts import render
from .forms import RegistroForm
from .models import Registro
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.decorators import user_passes_test
from django.http import JsonResponse


def formulario(request):
    if request.method == 'POST':
        registro_form = RegistroForm(data=request.POST)
        if registro_form.is_valid():
            try:
                # Intenta obtener un objeto con el mismo nombre
                existing_register = Registro.objects.get(
                    dni=registro_form.cleaned_data['dni'])
                # Si se encuentra, muestra un mensaje de error
                return render(request, 'register.html', {'form': registro_form, 'error_message': 'Ya estás registrado motero.'})
            except Registro.DoesNotExist:
                # Si no se encuentra, continúa con la lógica para guardar el nuevo registro
                registro_form.save()
                # Accede al nombre desde el formulario
                nombre = registro_form.cleaned_data['name']
                # Construye el mensaje de éxito con el nombre
                success_message = f'¡Bienvenido {nombre} a la familia motera!'
    else:
        # Si el método no es POST, simplemente inicializa el formulario
        registro_form = RegistroForm()
        # Define la variable success_message para que esté disponible fuera del bloque if
        success_message = None

    # Renderiza el formulario y el mensaje de éxito si está presente
    return render(request, 'register.html', {'form': registro_form, 'success_message': success_message})


def export_page(request):
    return render(request, 'export_page.html')

@api_view(['GET'])
@user_passes_test(lambda u: u.is_superuser)
def export_data_api(request):
    # Obtén los datos de tu modelo
    queryset = Registro.objects.all()

    # Construye una lista de diccionarios con los datos de contacto
   # Construye una lista de diccionarios con los datos de Registro
    data = [{'name': registro.name, 'dni': registro.dni, 'gender': registro.get_gender_display(),
             'number': registro.number, 'email': registro.email, 'age': registro.age,
             'moto_choice': registro.get_moto_choice_display(), 'moto': registro.moto,
             'subscription': registro.subscription, 'created_at': registro.created_at}
            for registro in queryset]

    # Devuelve una respuesta JSON
    return JsonResponse(data, safe=False)