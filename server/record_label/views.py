from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import *

def artists(request):
    artists = Artist.objects.all()
    artist_list = serializers.serialize('json', artists)
    return HttpResponse(artist_list, content_type="application/json")

def releases(request):
    releases = Release.objects.all()
    release_list = serializers.serialize('json', releases)
    return HttpResponse(release_list, content_type="application/json")

def posts(request):
    posts = Post.objects.all()
    post_list = serializers.serialize('json', posts)
    return HttpResponse(post_list, content_type="application/json")

def editions(request):
    editions = Edition.objects.all()
    edition_list = serializers.serialize('json', editions)
    return HttpResponse(edition_list, content_type="application/json")
