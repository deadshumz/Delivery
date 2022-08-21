from django.db import models

# Create your models here.
class RestaurantCategory(models.Model):
    name = models.CharField(max_length=96)
    total_orders = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Restaurant Category'
        verbose_name_plural = 'Restaurant Categories'

    def __str__(self):
        return self.name


class Restaurant(models.Model):
    category = models.ForeignKey(RestaurantCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    image = models.ImageField(upload_to = 'uploads')
    total_orders = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Restaurant'
        verbose_name_plural = 'Restaurants'

    def __str__(self):
        return self.name


class ProductCategory(models.Model):
    name = models.CharField(max_length=96)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    total_orders = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Product Category'
        verbose_name_plural = 'Product Categories'

    def __str__(self):
        return self.name


class Product(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    image = models.ImageField(upload_to = 'uploads')
    desc = models.TextField(max_length='256')
    cost = models.IntegerField()
    total_orders = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
    
    def __str__(self):
        return self.name