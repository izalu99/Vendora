from django.contrib import admin
from store.models import Category, Product, Gallery, Specification, Size, Color

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
    list_display = ['title', 'category', 'price', 'old_price', 'stock_qty', 'in_stock', 'vendor', 'featured']
    list_editable = ['price', 'old_price', 'stock_qty', 'in_stock', 'vendor', 'featured']
    list_filter = ['category', 'price', 'old_price', 'stock_qty', 'in_stock', 'vendor', 'featured']
    search_fields = ['title', 'category', 'price', 'old_price', 'stock_qty', 'in_stock', 'vendor', 'featured']
    inlines = [GalleryInline, SpecificationInline, SizeInline, ColorInline] 


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Gallery)
admin.site.register(Specification)
admin.site.register(Size)
admin.site.register(Color)