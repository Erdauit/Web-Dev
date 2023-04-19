from django.db import models


# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(null=True)
    city = models.CharField(max_length=10)
    address = models.TextField(max_length=15, null=True)


class Vacancy(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)
