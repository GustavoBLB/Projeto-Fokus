from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def cachorros(request):
    return render(request, 'cachorros.html')


