# backend/apps/learn/urls.py
from django.urls import path
from .views import start_learn

urlpatterns = [
    path('start/', start_learn),
]
