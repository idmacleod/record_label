from django.contrib import admin
from .models import *

admin.site.register(Artist)
admin.site.register(Release)
admin.site.register(BlogPost)
admin.site.register(Edition)