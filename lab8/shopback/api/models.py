from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def str(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def str(self):
        return self.name
