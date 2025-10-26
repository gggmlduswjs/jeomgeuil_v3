from django.urls import path
from .views import parse_intent

urlpatterns = [
    path('parse/', parse_intent),
]
