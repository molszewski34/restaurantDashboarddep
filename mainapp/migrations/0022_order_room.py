# Generated by Django 4.1.5 on 2023-07-21 19:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0021_orderdish_isdone'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='room',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='mainapp.room'),
        ),
    ]
