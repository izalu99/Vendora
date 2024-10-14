from django.db import models
from django.utils.text import slugify

from userauths.models import User

class Vendor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.FileField(upload_to='vendor', blank=True, null=True, default='vendor.jpg')
    name = models.CharField(max_length=100, help_text='Shop Name', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=15, help_text='Phone number', blank=True, null=True)
    active = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, unique=True)

    class Meta:
        verbose_name_plural = 'Vendors'
        ordering = ['-date'] # newest first

    def __str__(self):
        return str(self.name)
    
    def save(self, *args, **kwargs):
        if self.slug == '' or self.slug is None:
            self.slug = slugify(self.name) # making the name url friendly
        
        super(Vendor, self).save(*args, **kwargs)