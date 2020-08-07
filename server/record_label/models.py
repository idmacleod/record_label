from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)

class Release(models.Model):
    short_name = models.CharField(max_length=100)
    long_name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)

class BlogPost(models.Model):
    pub_date = models.DateTimeField()
    category = models.CharField(max_length=100)
    text = models.CharField(max_length=1000)
    media = models.CharField(max_length=200)
    links = models.CharField(max_length=200)
    release = models.ForeignKey(Release, on_delete=models.CASCADE)

class Edition(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    release = models.ForeignKey(Release, on_delete=models.CASCADE)

