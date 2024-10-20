from django.contrib import admin
#from vendor.models import Vendor
#from userauths.models import User
from store.models import Category, Product, Gallery, Specification, Size, Color, Cart, CartOrder, CartOrderItem
from store.models import ProductFaq, Review, Wishlist, Notification, Coupon, Tax


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'active', 'slug']
    list_filter = ['title', 'active']
    search_fields = ['title', 'slug']

class GalleryInline(admin.TabularInline):
    model = Gallery
    extra = 0

class SpecificationInline(admin.TabularInline):
    model = Specification
    extra = 0

class SizeInline(admin.TabularInline):
    model = Size
    extra = 0

class ColorInline(admin.TabularInline):
    model = Color
    extra = 0

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id','pid','title', 'category', 'price', 'old_price', 'stock_qty', 'in_stock', 'vendor', 'featured']
    list_editable = ['price', 'old_price', 'stock_qty', 'in_stock', 'vendor', 'featured']
    list_filter = ['category', 'price', 'old_price', 'stock_qty', 'in_stock', 'vendor', 'featured']
    search_fields = ['title', 'category', 'price', 'old_price', 'stock_qty', 'in_stock', 'vendor', 'featured']
    inlines = [GalleryInline, SpecificationInline, SizeInline, ColorInline]


class CartOrderInline(admin.TabularInline):
    model = CartOrderItem
    extra = 0


class CartAdmin(admin.ModelAdmin):
    list_display = ['cart_id', 'date', 'product','user','qty','price','size','color','country','total' ]

class CartOrderAdmin(admin.ModelAdmin):
    list_display = ['oid','date','buyer','full_name','total', 'order_status', 'payment_status']
    inlines = [CartOrderInline]

class CartOrderItemAdmin(admin.ModelAdmin):
    list_display = ['oid','date','order', 'product', 'vendor', 'qty', 'price', 'sub_total', 'shipping_amount', 'total']


class ReviewAdmin(admin.ModelAdmin):
    list_display = ['product', 'user', 'rating', 'review', 'date']

class ProductFaqAdmin(admin.ModelAdmin):
    list_display = ['product', 'user', 'email', 'question', 'answer', 'date']

class WishlistAdmin(admin.ModelAdmin):
    list_display = ['product', 'user', 'date']

class NotificationAdmin(admin.ModelAdmin):
    list_display = ['user', 'vendor', 'order', 'order_item', 'seen', 'date']

class CouponAdmin(admin.ModelAdmin):
    list_display = ['code', 'discount', 'vendor', 'active', 'date']

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Gallery)
admin.site.register(Specification)
admin.site.register(Size)
admin.site.register(Color)
admin.site.register(Cart, CartAdmin)
admin.site.register(CartOrder, CartOrderAdmin)
admin.site.register(CartOrderItem, CartOrderItemAdmin)

admin.site.register(ProductFaq, ProductFaqAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Wishlist, WishlistAdmin)
admin.site.register(Notification, NotificationAdmin)
admin.site.register(Coupon, CouponAdmin)
admin.site.register(Tax)