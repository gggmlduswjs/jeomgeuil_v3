# backend/apps/braille/urls.py
from django.urls import path
from .views import convert_braille   # 함수 이름 맞게 변경

urlpatterns = [
    path("convert/", convert_braille, name="convert_braille"),
]
