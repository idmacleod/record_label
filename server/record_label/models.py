from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

    def get_json(self):
        releases = [{
            "pk": release.pk,
            "cat_no": release.cat_no,
            "name": release.name,
            "description": release.description,
            "cover_art": release.cover_art
        } for release in self.release_set.all()]
        return {
            "pk": self.pk,
            "name": self.name,
            "description": self.description,
            "releases": releases
        }

class Release(models.Model):
    cat_no = models.CharField(max_length=100)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    cover_art = models.CharField(max_length=200, null=True, blank=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.cat_no} - {self.name} ({self.artist.name})"

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
            "cat_no": self.cat_no,
            "name": self.name,
            "description": self.description,
            "cover_art": self.cover_art,
            "artist": artist,
            "editions": editions
        }

class Edition(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    release = models.ForeignKey(Release, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.release.cat_no} - {self.release.name} ({self.release.artist.name}) - {self.name}"

    def get_json(self):
        release = {
            "pk": self.release.pk,
            "cat_no": self.release.cat_no,
            "name": self.release.name,
            "description": self.release.description,
            "cover_art": self.release.cover_art,
            "artist": {
                "pk": self.release.artist.pk,
                "name": self.release.artist.name,
                "description": self.release.artist.description,
            }
        }
        return {
            "pk": self.pk,
            "name": self.name,
            "description": self.description,
            "release": release
        }

class Post(models.Model):
    pub_date = models.DateTimeField()
    category = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    text = models.TextField()
    media = models.CharField(max_length=200, null=True, blank=True)
    links = models.CharField(max_length=200, null=True, blank=True)
    release = models.ForeignKey(Release, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"{self.pub_date} - {self.title}"

    def get_json(self):
        if self.release:
            release = self.release.get_json()
        else:
            release = None
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