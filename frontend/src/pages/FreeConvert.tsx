import React, { useState } from "react";
import axios from "axios";
import BrailleCell from "../components/BrailleCell";

export default function FreeConvert() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{ char: string; pattern: number[] }[]>([]);

  const handleConvert = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/braille/convert/", { text });
      console.log("서버 응답:", response.data);

      if (response.data && Array.isArray(response.data.result)) {
        setResult(response.data.result);
      } else {
        setResult([]);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <div className="flex items-center mb-8">
        <img src="/icons/icon-192.png" alt="icon" className="w-10 h-10 mr-3" />
        <h1 className="text-4xl font-bold text-gray-800">
          자유 변환 <span className="block text-3xl mt-1">(Free Convert)</span>
        </h1>
      </div>

      <div className="flex justify-center items-center gap-2 mb-6">
        <input
          className="border p-2 rounded text-center"
          placeholder="한글을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleConvert}
          className="px-4 py-2 bg-blue-100 border border-blue-400 rounded hover:bg-blue-200"
        >
          점자로 변환
        </button>
      </div>

      {result.length > 0 && (
  <div className="flex justify-center items-start gap-8 mt-8 flex-wrap w-full max-w-5xl mx-auto">

          {result.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <BrailleCell pattern={item.pattern} />
              <p className="text-lg mt-2">{item.char}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
