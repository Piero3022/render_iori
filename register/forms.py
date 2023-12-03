from django import forms
from register.models import Registro


class RegistroForm(forms.ModelForm):

    class Meta:
        model = Registro
        # fields = '__all__'
        fields = ['name', 'dni', 'gender', 'number', 'email', 'age', 'moto_choice', 'moto', 'subscription']
        
                 