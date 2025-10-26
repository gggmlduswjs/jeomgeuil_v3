import { useNavigate } from "react-router-dom";
import { useTTS } from "../hooks/useTTS";

export function useCommandExecutor() {
  const navigate = useNavigate();
  const { speak } = useTTS();

  const executeCommand = (intent: string) => {
    switch (intent) {
      case "news":
      case "explore":
        speak("뉴스 정보를 탐색할게요.");
        navigate("/explore");
        break;
      case "learn":
        speak("학습 모드를 시작합니다.");
        navigate("/learn");
        break;
      case "review":
        speak("복습을 시작할게요.");
        navigate("/review");
        break;
      case "convert":
        speak("문장을 점자로 변환할게요.");
        navigate("/freeconvert");
        break;
      default:
        speak("이해하지 못했어요. 다시 말씀해 주세요.");
        break;
    }
  };

  return { executeCommand };
}
