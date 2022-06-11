from apiapp.models import Movie
from rest_framework import serializers


class MovieSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Movie
        fields = ('image', 'name', 'description', 'rating')
