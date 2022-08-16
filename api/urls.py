from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('category', views.category_view),
    path('restaurant_list', views.restaurant_list),
    path('restaurant/<int:id>', views.restaurant_by_id)
]