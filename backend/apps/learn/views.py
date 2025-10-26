# backend/apps/learn/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .services import get_learning_words

@api_view(['GET'])
def start_learn(request):
    words = get_learning_words()
    return Response({"data": words})
