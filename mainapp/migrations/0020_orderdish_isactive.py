# Generated by Django 4.1.5 on 2023-07-18 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0019_order_isactive'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderdish',
            name='isActive',
            field=models.BooleanField(default=False),
        ),
    ]
