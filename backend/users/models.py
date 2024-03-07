from django.db import models

class User(models.Model):
    token = models.TextField()
    userName = models.CharField(max_length=200, unique=True)
    email = models.CharField(max_length=200, unique=True)