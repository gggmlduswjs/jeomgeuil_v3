import React, { useEffect, useState } from "react";
import { getLearningWords } from "../api/learnAPI";
import { useTTS } from "../hooks/useTTS";
import BrailleCell from "../components/BrailleCell";

interface WordData {
  id: number;
  word: string;
  pattern: number[];
}

export default function Learn() {
  const [words, setWords] = useState<WordData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { speak } = useTTS();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLearningWords();
      setWords(data);
      if (data.length > 0) speak(`학습을 시작합니다. 첫 번째 글자는 ${data[0].word} 입니다.`);
    };
    fetchData();
  }, []);

  const nextWord = () => {
    if (currentIndex + 1 < words.length) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      speak(`다음 글자는 ${words[next].word} 입니다.`);
    } else {
      speak("학습이 모두 끝났습니다.");
    }
  };

  if (words.length === 0) return <p>로딩 중...</p>;

  const current = words[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">📘 점자 학습</h1>
      <p className="text-lg mb-3">현재 글자: {current.word}</p>
      <BrailleCell pattern={current.pattern} />
      <button
        onClick={nextWord}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
      >
        다음 글자
      </button>
    </div>
  );
}
