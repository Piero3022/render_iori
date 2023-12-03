from django.db import models

# Create your models here.

gender_options = [
    ['M', 'Mujer'],
    ['H', 'Hombre'],
    ['O', 'Otros']
]

choice_moto = [
   	[0, 'DEPORTIVA'],
    [1, 'NAKED'],
   	[2, 'SCOOTER'],
	[3, 'DOBLE PROPÓSITO - TODO TERRENO'],
	[4, 'CAFÉ RACER'],
	[5, 'CRUISER - CHOPPER'],
	[6, 'TOURING - VIAJERAS'],
	[7, 'ENDURO - CROSS']
]

moto_bool = [
    [True, 'Sí'],
    [False, 'No, soy motero sin moto.']
]

class Registro(models.Model):
    name = models.CharField(max_length=100, verbose_name='Nombres y Apellidos:')
    dni = models.CharField(max_length=8, verbose_name='DNI:')
    gender = models.CharField(max_length=1, choices=gender_options, verbose_name='Género:')
    number = models.CharField(max_length=9, verbose_name='Número de celular:')
    email = models.EmailField(verbose_name='Correo electrónico:')
    age = models.IntegerField(verbose_name='Edad:')
    moto_choice = models.IntegerField(choices=choice_moto, verbose_name='¿Qué tipo de motos te gustan?')
    moto = models.BooleanField(choices=moto_bool, verbose_name='¿Tienes moto?' )
    subscription = models.BooleanField(default=False, verbose_name='QUIERO SER PARTE DE LA FAMILIA MOTERA DEL LOCO IORI.')
    created_at = models.DateField(auto_now_add=True, verbose_name='Fecha de envío')