from django.urls import path

from . import views

urlpatterns = [
    path('artists/', views.artists, name="artists"),
    path('releases/', views.releases, name="releases"),
    path('editions/', views.editions, name="editions"),
    path('posts/', views.posts, name="posts"),
    path('tracks/', views.tracks, name="tracks")
]