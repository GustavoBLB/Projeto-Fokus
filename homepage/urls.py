from django.urls import path
from . import views
from homepage.views import index,cachorros

urlpatterns = [
    path('', views.indexView, name = 'home'),
    path('cachorros/',cachorros, name='cachorros')
]