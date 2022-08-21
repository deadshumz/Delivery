from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('categories', views.category_view),
    # path('restaurant_list', views.restaurant_list),
    path('restaurants/<str:category_id>', views.restaurants_by_category),
    path('restaurants/<int:id>', views.restaurant_by_id),
]