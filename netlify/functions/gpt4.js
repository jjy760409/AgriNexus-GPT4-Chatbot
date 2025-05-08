const openaiModule = require("openai");
const Configuration = openaiModule.Configuration;
const OpenAIApi = openaiModule.OpenAIApi;

exports.handler = async function (event, context) {
  try {
    const { message } = JSON.parse(event.body || "{}");

    if (!process.env.OPENAI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "OPENAI_API_KEY가 설정되지 않았습니다." })
      };
    }

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: message }]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: response.data.choices[0].message.content })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "오류 발생" })
    };
  }
};