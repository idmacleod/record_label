# Generated by Django 3.1 on 2020-08-10 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('record_label', '0006_auto_20200810_1006'),
    ]

    operations = [
        migrations.AddField(
            model_name='release',
            name='cover_art',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
