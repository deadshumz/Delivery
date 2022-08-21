from rest_framework import serializers
from .models import *

class RestaurantCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantCategory
        fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = '__all__'
