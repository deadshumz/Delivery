from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('categories', views.category_view),
    path('restaurants/category/', views.restaurant_list),
    path('restaurants/category/<str:category_id>', views.restaurants_by_category),
    path('restaurants/<int:id>', views.restaurant_by_id),
    # path('restaurant')
]