# Generated by Django 4.2 on 2024-10-06 07:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userauths', '0002_alter_profile_users'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='users',
            new_name='user',
        ),
    ]
