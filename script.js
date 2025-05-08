async function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const chatOutput = document.getElementById("chatOutput");
  chatOutput.textContent = "응답 중...";

  try {
    const response = await fetch("/.netlify/functions/gpt4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();
    chatOutput.textContent = data.reply || "응답 없음";
  } catch (error) {
    chatOutput.textContent = "오류 발생: " + error.message;
  }
}