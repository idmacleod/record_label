from django.urls import path

from . import views

urlpatterns = [
    path('artists/', views.artists, name="artists"),
    path('releases/', views.releases, name="releases"),
    path('posts/', views.posts, name="posts"),
    path('editions/', views.editions, name="editions"),
]