from django.urls import path

from homepage.views import index,cachorros

urlpatterns = [
    path('', index),
    path('cachorros/',cachorros, name='chachorros')
]