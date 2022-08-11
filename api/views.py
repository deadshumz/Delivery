from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def category_view(request):
    queryset = Category.objects.all() 
    serializer = CategorySerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def restaurant_view(request):
    queryset = Restaurant.objects.all() 
    serializer = RestaurantSerializer(queryset, many=True)
    return Response(serializer.data)

# TODO: Restaurants view
# request.query_params.get('count')
# [((count // 32) - 1):count] - first 32 restaurants