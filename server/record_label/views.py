from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import Artist, Release, BlogPost, Edition

def artists(request):
    artists = Artist.objects.all()
    artist_list = serializers.serialize('json', artists)
    return HttpResponse(artist_list, content_type="application/json")

def releases(request):
    releases = Release.objects.all()
    release_list = serializers.serialize('json', releases)
    return HttpResponse(release_list, content_type="application/json")

def blog_posts(request):
    blog_posts = BlogPost.objects.all()
    blog_post_list = serializers.serialize('json', blog_posts)
    return HttpResponse(blog_post_list, content_type="application/json")

def editions(request):
    editions = Edition.objects.all()
    edition_list = serializers.serialize('json', editions)
    return HttpResponse(edition_list, content_type="application/json")
