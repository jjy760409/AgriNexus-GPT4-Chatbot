# AgriNexus GPT-4 Chatbot (Netlify Functions 연동)

## 📦 파일 구성

- index.html / style.css / script.js → 사용자 인터페이스
- netlify/functions/gpt4.js → OpenAI API 호출 서버리스 함수

## 🚀 배포 방법

1. GitHub에 업로드
2. Netlify에서 "New Site from Git"
3. Publish directory: `./`
4. Functions directory: `netlify/functions`
5. 환경변수 등록: `OPENAI_API_KEY`