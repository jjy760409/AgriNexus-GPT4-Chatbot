async function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const chatOutput = document.getElementById("chatOutput");
  chatOutput.textContent = "⏳ 응답 중...";

  try {
    const response = await fetch("/.netlify/functions/gpt4", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    if (data.reply) {
      chatOutput.textContent = data.reply;
    } else if (data.error) {
      chatOutput.textContent = "❌ 오류: " + data.error;
      console.error("서버 오류:", data.error);
    } else {
      chatOutput.textContent = "❌ 알 수 없는 응답 구조";
      console.log("응답 전체:", data);
    }
  } catch (error) {
    chatOutput.textContent = "❌ 네트워크 오류: " + error.message;
    console.error("네트워크 오류:", error);
  }
}