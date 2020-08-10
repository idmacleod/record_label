from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name

    def get_json(self):
        releases = [{
            "pk": release.pk,
            "short_name": release.short_name,
            "long_name": release.long_name,
            "description": release.description
        } for release in self.release_set.all()]
        return {
            "pk": self.pk,
            "name": self.name,
            "description": self.description,
            "releases": releases
        }

class Release(models.Model):
    short_name = models.CharField(max_length=100)
    long_name = models.CharField(max_length=200)
    description = models.CharField(max_length=200, null=True, blank=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.short_name} - {self.artist.name}"

    def get_json(self):
        artist = {
            "pk": self.artist.pk,
            "name": self.artist.name,
            "description": self.artist.description
        }
        editions = [{
            "pk": edition.pk,
            "name": edition.name,
            "description": edition.description
        } for edition in self.edition_set.all()]
        return {
            "pk": self.pk,
            "short_name": self.short_name,
            "long_name": self.long_name,
            "description": self.description,
            "artist": artist,
            "editions": editions
        }

class Edition(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200, null=True, blank=True)
    release = models.ForeignKey(Release, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.release.short_name} - {self.name}"

    def get_json(self):
        release = {
            "pk": self.release.pk,
            "short_name": self.release.short_name,
            "long_name": self.release.long_name,
            "description": self.release.description,
            "artist": {
                "pk": self.release.artist.pk,
                "name": self.release.artist.name,
                "description": self.release.artist.description,
            }
        }

class Post(models.Model):
    pub_date = models.DateTimeField()
    category = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=1000)
    media = models.CharField(max_length=200, null=True, blank=True)
    links = models.CharField(max_length=200, null=True, blank=True)
    release = models.ForeignKey(Release, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"{self.pub_date} - {self.title}"

    def get_json(self):
        release = self.release.get_json()
        return {
            "pk": self.pk,
            "pub_date": self.pub_date,
            "category": self.category,
            "title": self.title,
            "text": self.text,
            "media": self.media,
            "links": self.links,
            "release": release
        }


