from rest_framework.decorators import api_view
from rest_framework.response import Response

# backend/intent/views.py
@api_view(['POST'])
def parse_intent(request):
    text = request.data.get('text', '')

    # 문자열 전처리: 공백, 대소문자, 특수문자 제거
    text = str(text).strip().lower().replace(" ", "")
    print("받은 텍스트:", text)  # 🔍 서버 콘솔에서 확인 가능

    # intent 판별
    if "뉴스" in text or "news" in text:
        intent = "news"
    elif "학습" in text or "learn" in text:
        intent = "learn"
    elif "복습" in text or "review" in text:
        intent = "review"
    else:
        intent = "unknown"

    return Response({"intent": intent})
