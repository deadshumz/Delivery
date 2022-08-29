from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from .models import *
from .serializers import *
import random
# Create your views here.

@api_view(['GET'])
def category_view(request):
    queryset = RestaurantCategory.objects.all() 
    serializer = RestaurantCategorySerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def restaurant_list(request):
    queryset = Restaurant.objects.all()
    serializer = RestaurantSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def restaurants_by_category(request, category_id):
    id_array = category_id.split(",")
    category = RestaurantCategory.objects.filter(id__in=id_array)
    queryset = Restaurant.objects.filter(category__in=category)
    serializer = RestaurantSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def restaurant_by_id(request, id):
    queryset = Restaurant.objects.filter(id=id)
    serializer = RestaurantSerializer(queryset, many=True)
    return Response(serializer.data)
