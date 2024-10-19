from django.shortcuts import render
from userauths.models import User
from store.models import Product, Category, Cart, CartOrder, CartOrderItem
from store.serializers import ProductSerializer, CategorySerializer, CartSerializer, CartOrderSerializer, CartOrderItemSerializer, ProductFaqSerializer

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny


class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class ProductDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        slug = self.kwargs['slug']
        return Product.objects.get(slug=slug)
    


class CartAPIView(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        payload = request.data
        pid = payload['pid'] # product id
        user_id = payload['email'] # get the user email for now
        qty = payload['qty']
        price = payload['price']
        shipping_amount = payload['shipping_amount']
        country = payload['country']
        size = payload['size']
        color = payload['color']
        cart_id = payload['cart_id']

        product = Product.objects.get(id=pid)
        if user_id != "undefined":
            user = User.objects.get(id=user_id)
        else:
            user = None

