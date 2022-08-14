from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Restaurant
        fields = '__all__'

    def get_image_url(self, obj):
        request = self.context['request']
        return [request.build_absolute_uri(obj.image)]