from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def category_view(request):
    queryset = Category.objects.all() 
    serializer = CategorySerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def restaurant_list(request):
    category = request.query_params.get('category')
    try:
        category = int(category)
        queryset = Restaurant.objects.filter(category=category)
    except:
        queryset = Restaurant.objects.all()

    serializer = RestaurantSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def restaurant_by_id(request,id):
    print(id)
    queryset = Restaurant.objects.filter(id=id)
    print(queryset)
    serializer = RestaurantSerializer(queryset, many=True)
    return Response(serializer.data)
