from django.contrib import admin
from userauths.models import User, Profile


class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'full_name', 'username', 'phone']
    search_fields = ['email', 'full_name', 'username', 'phone']
    


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user','pid','full_name', 'date','about', 'agenda','country','province','address']
    list_editable = ['country']
    search_fields = ['full_name', 'about', 'agenda','country','province','address']
    list_filter = ['country', 'province', 'date']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)

