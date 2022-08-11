from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(null=False, max_length=96)
    created_at = models.DateTimeField(auto_now_add=True)
    total_orders = models.IntegerField(default=0)
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

# class Restaurant(models.Model):
#     category = models.ForeignKey(Category, on_delete=models.CASCADE)
