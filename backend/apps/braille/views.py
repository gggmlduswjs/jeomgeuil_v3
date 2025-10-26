from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import braille_map

@api_view(["POST"])
def convert_braille(request):
    text = request.data.get("text", "")
    result = []

    for char in text:
        pattern = braille_map.get(char, [0, 0, 0, 0, 0, 0])
        result.append({"char": char, "pattern": pattern})

    print("✅ 변환 결과:", result)   # 👈 확인용 출력
    return Response({"result": result})
