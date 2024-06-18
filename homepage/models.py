from django.db import models


class Cadastro(models.Model):
    nome = models.CharField(max_length=40, blank=False, null=False)
    email = models.EmailField(blank=False, null=False)
    telefone = models.CharField(max_length=15, blank=False, null=False)

    def __str__(self):
        return self.nome

