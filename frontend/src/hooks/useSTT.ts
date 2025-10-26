import { useState, useEffect } from "react";

export function useSTT() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.lang = "ko-KR"; // 한국어 인식
    recog.interimResults = false;
    recog.continuous = false;

    recog.onresult = (e) => {
      const result = e.results[0][0].transcript;
      setText(result);
      setListening(false);
    };

    recog.onerror = () => setListening(false);
    recog.onend = () => setListening(false);
    setRecognition(recog);
  }, []);

  const startListening = () => {
    if (recognition && !listening) {
      setText("");
      setListening(true);
      recognition.start();
    }
  };

  return { text, listening, startListening };
}
