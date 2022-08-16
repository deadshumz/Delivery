from django.test import TestCase
from .models import *

# Create your tests here.
class RestaurantTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.category = Category.objects.create(name='Test')
        cls.restaurant = Restaurant.objects.create(name='Test', image='None', category=cls.category)

    def test_object_found(self):
        response = self.client.get('/api/restaurant/' + str(self.category.id)).json()[0]
        self.assertEqual(response['name'], self.restaurant.name)