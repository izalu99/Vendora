from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

import shortuuid

from userauths.models import User, Profile
from userauths.serializer import RegisterSerializer, MyTokenObtainPairSerializer, UserSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


def generate_otp():
    uuid_key = shortuuid.uuid()
    unique_key = uuid_key[:7]
    return unique_key

class PasswordResetEmailVerify(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

    def get_object(self):
        email = self.kwargs['email']
        user  = User.objects.get(email=email)
        print("user=====", user)

        if user:
            user.otp = generate_otp()
            user.save()

            uidb64 = user.pk
            otp = user.otp

            link = f"http://localhost:5173/create-new-password?otp={otp}&uidb64={uidb64}"
            print("link====", link)

            #send email
            

        return user


class PasswordChangeView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

    def create(self, request):
        payload = request.data
        otp = payload['otp']
        uidb64 = payload['uidb64']
        #reset_token = payload['reset_token']
        password = payload['password']

        user = User.objects.get(id=uidb64, otp=otp)
        if user:
            user.set_password(password)
            user.otp = ""
            #user.reset_token = ""
            user.save()
            return Response({"message": "Password changed successfully."}, status=200)
        else:
            return Response({"message": "An error occurded changing password"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)