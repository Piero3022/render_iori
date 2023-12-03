from django.contrib import admin
from .models import Registro

# Register your models here.

#class RegisterAdmin(admin.ModelAdmin):
   # list_display = ('name', 'gender', 'number', 'age', 'moto_choice', 'moto')
   # search_fields = ('name', 'gender', 'age', 'moto_choice', 'moto')
   # list_filter = ('name','gender', 'age')
    

class RegisterAdmin(admin.ModelAdmin):
    #search_fields = ['name', 'dni', 'number', 'email']  # Campos para búsqueda

    #list_display = ['name', 'dni', 'number', 'email', 'created_at']  # Campos para mostrar en la lista principal
    list_display = ('name', 'dni', 'gender', 'number', 'email', 'age', 'moto_choice', 'moto', 'created_at')
    fieldsets = [
        ('Información Personal', {'fields': ['name', 'dni', 'gender', 'age']}),
        ('Información de Contacto', {'fields': ['number', 'email']}),
        ('Preferencias de Moto', {'fields': ['moto_choice', 'moto']}),
        ('Otros Detalles', {'fields': ['subscription', 'created_at']}),
    ]

    # Para personalizar la lista de registros
    def get_list_display(self, request):
        if request.user.is_superuser:
            return self.list_display
        # Si el usuario no es un superusuario, oculta algunos campos en la lista principal
        return ['name', 'dni', 'email', 'created_at']


admin.site.register(Registro, RegisterAdmin)


