import React, { useState } from "react";
import { useSTT } from "../hooks/useSTT";
import { useTTS } from "../hooks/useTTS";
import { detectIntent } from "../utils/intentHandler";
import { useCommandExecutor } from "../utils/commandExecutor";

export default function Home() {
  const { text, listening, startListening } = useSTT();
  const { speak } = useTTS();
  const { executeCommand } = useCommandExecutor();
  const [intent, setIntent] = useState("");

  const handleVoice = async () => {
    if (!text) return;
    const detected = await detectIntent(text);
    setIntent(detected);
    executeCommand(detected);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">🧠 점글이 Jeomgeuli</h1>

      <button
        onClick={startListening}
        className={`px-6 py-3 rounded text-white font-semibold ${
          listening ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {listening ? "음성 인식 중..." : "말하기 시작"}
      </button>

      <button
        onClick={handleVoice}
        className="bg-green-500 text-white px-6 py-2 rounded mt-3"
      >
        의도 분석 실행
      </button>

      <div className="mt-6 text-lg text-gray-700">
        {text && <p>🗣️ 인식된 문장: {text}</p>}
        {intent && <p>💡 판별된 의도: {intent}</p>}
      </div>
    </div>
  );
}
