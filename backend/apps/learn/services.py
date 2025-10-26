# backend/apps/learn/services.py

def get_learning_words():
    return [
        {"id": 1, "word": "가", "pattern": [1, 0, 0, 0, 0, 0]},
        {"id": 2, "word": "나", "pattern": [1, 0, 1, 0, 0, 0]},
        {"id": 3, "word": "다", "pattern": [1, 1, 0, 0, 1, 0]},
    ]
