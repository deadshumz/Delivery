from django.contrib import admin
from .models import *

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'total_orders', 'created_at',)


class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('name', 'total_orders', 'category', 'created_at',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(Restaurant, RestaurantAdmin)