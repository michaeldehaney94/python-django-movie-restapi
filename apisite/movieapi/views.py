from django.shortcuts import render
from rest_framework import generics
from apiapp.models import Movie
from .serializers import MovieSerializer


# Create your views here.
class MovieAPIView(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView): # retrieves the details of selected movie
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
