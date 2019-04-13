from django import forms
from App.models import Student
class Formpage(forms.ModelForm):
    class Meta:
        model = Student
        fields = '__all__'