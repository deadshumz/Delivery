from django.contrib import admin
from .models import *

# Register your models here.
class RestaurantCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'total_orders', 'created_at',)


class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('name', 'total_orders', 'category', 'created_at',)
    list_filter = ('category',)
    search_fields = ('name',)
    ordering = ('name',)


class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'restaurant')
    search_fields = ('name', 'restaurant__name',)
    list_filter = ('restaurant',)


admin.site.register(RestaurantCategory, RestaurantCategoryAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(ProductCategory, ProductCategoryAdmin)
admin.site.register(Product)