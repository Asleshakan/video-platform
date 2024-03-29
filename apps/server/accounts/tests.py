from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User


# Create your tests here.
class AccountsTest(APITestCase):
    def testAccountCreation(self):
        data = {"username": "test", "email": "test@gmail.com", "password": "dj4fdn28"}
        response = self.client.post("/auth/users/", data, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
