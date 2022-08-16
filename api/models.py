from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=96)
    total_orders = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Restaurant(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    image = models.ImageField(upload_to = 'uploads')
    total_orders = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Restaurant'
        verbose_name_plural = 'Restaurants'

    def __str__(self):
        return self.name