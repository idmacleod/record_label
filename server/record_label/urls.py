from django.urls import path

from . import views

urlpatterns = [
    path('artists/', views.artists, name="artists"),
    path('releases/', views.releases, name="releases"),
    path('blog_posts/', views.blog_posts, name="blog_posts"),
    path('editions/', views.editions, name="editions"),
]