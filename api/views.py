from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from .models import *
from .serializers import *
import random
# Create your views here.

@api_view(['GET'])
def category_view(request):
    queryset = Category.objects.all() 
    serializer = CategorySerializer(queryset, many=True)
    return Response(serializer.data)


# @api_view(['GET'])
# def restaurant_list(request):
#     queryset = Restaurant.objects.all()
#     serializer = RestaurantSerializer(queryset, many=True)
#     return Response(serializer.data)


@api_view(['GET'])
def restaurants_by_category(request, category_id):
    try:
        category = Category.objects.filter(id=category_id)[0]
        queryset = Restaurant.objects.filter(category=category)
    except:
        queryset = Restaurant.objects
    serializer = RestaurantSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def restaurant_by_id(request,id):
    queryset = Restaurant.objects.filter(id=id)
    serializer = RestaurantSerializer(queryset, many=True)
    return Response(serializer.data)
