from django.urls import path

from homepage.views import index,cachorros

urlpatterns = [
    path('', index, name = 'home'),
    path('cachorros/',cachorros, name='cachorros')
]