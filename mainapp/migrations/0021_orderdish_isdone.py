# Generated by Django 4.1.5 on 2023-07-21 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0020_orderdish_isactive'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderdish',
            name='isDone',
            field=models.BooleanField(default=False),
        ),
    ]
