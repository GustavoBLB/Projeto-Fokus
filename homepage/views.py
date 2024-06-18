from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Cadastro

def indexView(request):
    if request.method == 'GET':
        cadastro_form = Cadastro.objects.all()
        return render(request, 'index.html',{'cadastro':cadastro_form})

    elif request.method == 'POST':
        nome = request.POST.get('nome')
        email = request.POST.get('email')
        telefone = request.POST.get('telefone')
        
        pessoas = Cadastro(
            nome=nome,
            email=email,    
            telefone=telefone
        )
        
        pessoas.save()
        
        return render(request,'index.html')


def index(request):
    return render(request, 'index.html')


def cachorros(request):
    return render(request, 'cachorros.html')


