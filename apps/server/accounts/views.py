from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserModelSerializer


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
