from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer
# Create your views here.

@api_view(['GET'])
def category_view(request):
    queryset = Category.objects.all()
    serializer = CategorySerializer(queryset, many=True)
    return Response(serializer.data)