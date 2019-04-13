from django.shortcuts import render
from App.form import Formpage
# Create your views here.
def index(request):
    return render(request,'index.html')

def formView(request):
    form = Formpage
    if request.method == 'POST':
        form = Formpage(request.POST)
        if form.is_valid():
            form.save()
            form = Formpage()
    return render(request,'formpage.html',{'f':form})