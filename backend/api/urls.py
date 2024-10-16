from django.urls import path

from userauths import views as userauths_views
from store import views as store_views

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('user/token/', userauths_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/refresh', TokenRefreshView.as_view(), name='token_obtain_refresh'),
    path('user/register/', userauths_views.RegisterView.as_view(), name='auth_register'),
    path('user/password-reset/<email>/', userauths_views.PasswordResetEmailVerify.as_view(), name='password_reset'),
    path('user/password-change/', userauths_views.PasswordChangeView.as_view(), name='password_change'),

    #store endpoints
    path('category/', store_views.CategoryListAPIView.as_view(), name='category_list'),
    path('product/', store_views.ProductListAPIView.as_view(), name='product_list'),
    path('products/<slug>', store_views.ProductDetailAPIView.as_view(), name='product_detail'),
]