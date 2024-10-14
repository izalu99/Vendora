from django.db import models
from django.utils.text import slugify

#from userauths.models import User, Profile
from vendor.models import Vendor

from shortuuid.django_fields import ShortUUIDField




class Category(models.Model):
    title = models.CharField(max_length=100)
    image = models.FileField(upload_to='category', blank=True, null=True, default='category.jpg')
    active = models.BooleanField(default=True) #by default, the category is active
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name_plural = 'Category'
        ordering = ['title']

    def __str__(self):
        return str(self.title)
    


class Product(models.Model):

    STATUS = (
        ('draft', 'Draft'),
        ('disabled', 'Disabled'),
        ('in_review', 'In Review'),
        ('published', 'Published'),
    )

    title = models.CharField(max_length=100)
    image = models.FileField(upload_to='products', blank=True, null=True, default='product.jpg')
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='category')
    old_price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    shipping_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    stock_qty = models.PositiveIntegerField(default=1) # if your adding a product, you must have at least one in stock
    in_stock = models.BooleanField(default=True) #by default, the product is in stock

    status = models.CharField(max_length=100 ,choices=STATUS, default='published')

    featured = models.BooleanField(default=False) #by default, the product is not featured until admin makes it featured
    views = models.PositiveIntegerField(default=0)
    rating = models.PositiveIntegerField(default=0) # rating out of 5
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, related_name='vendor', null=True, blank=True)
    pid = ShortUUIDField(unique=True, length=10, alphabet='abcdefghi0123456789') # product id
    slug = models.SlugField(unique=True)
    date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.slug == '' or self.slug == None:
            self.slug = slugify(self.name) # making the name url friendly
        
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.title)
    

class Gallery(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.FileField(upload_to='products', default='product.jpg')
    active = models.BooleanField(default=True) #by default, the image is active
    gid = ShortUUIDField(unique=True, length=10, alphabet='abcdefghi0123456789') # gallery id

    def __str__(self):
        return str(self.product.title)
    
    class Meta:
        verbose_name_plural = 'Product Images'


class Specification(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    title = models.CharField(max_length=1000)
    content = models.CharField(max_length=1000)

    def __str__(self):
        return str(self.title)


class Size(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    name = models.CharField(max_length=1000)
    price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)

    def __str__(self):
        return str(self.name)


class Color(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    name = models.CharField(max_length=1000)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    color_code = models.CharField(max_length=1000) 

    def __str__(self):
        return str(self.name)
