export default async (request, context) => {
  try {
    const { default: OpenAI } = await import("openai");

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const { message } = await request.json();

    const chat = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: message }]
    });

    return new Response(JSON.stringify({ reply: chat.choices[0].message.content }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || "에러 발생" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};