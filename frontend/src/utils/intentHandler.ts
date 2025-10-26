import commandList from "./commandList.json";
import { parseIntent } from "../api/intentAPI";

export async function detectIntent(text: string): Promise<string> {
  const cleanText = text.replace(/\s/g, "").toLowerCase();

  // 1️⃣ 로컬 키워드 사전 우선 검사
  for (const [intent, keywords] of Object.entries(commandList)) {
    if (keywords.some((kw) => cleanText.includes(kw))) {
      return intent;
    }
  }

  // 2️⃣ 서버에 의도 요청 (fallback)
  try {
    const res = await parseIntent(cleanText);
    return res.intent;
  } catch {
    return "unknown";
  }
}
