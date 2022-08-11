from django.urls import path
from . import views

urlpatterns = [
    path('category', views.category_view),
    path('restaurant', views.restaurant_view)
]
