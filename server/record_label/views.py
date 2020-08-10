from django.http import JsonResponse
from .models import *

def artists(request):
    artists = [artist.get_json() for artist in Artist.objects.all()]
    data = {"artists": artists}
    return JsonResponse(data)

def releases(request):
    releases = [release.get_json() for release in Release.objects.all()]
    data = {"releases": releases}
    return JsonResponse(data)

def editions(request):
    editions = [edition.get_json() for edition in Edition.objects.all()]
    data = {"editions": editions}
    return JsonResponse(data)

def posts(request):
    posts = [post.get_json() for post in Post.objects.all()]
    data = {"posts": posts}
    return JsonResponse(data)