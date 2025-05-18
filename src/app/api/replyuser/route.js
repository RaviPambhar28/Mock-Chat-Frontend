import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { users, message, messages } = await req.json();
    const userList = users.map((u) => `- ${u.name}: ${u.userId}`).join("\n");
    const messageList = messages.map((m) => `- ${m.sender}: ${m.content}`).join("\n");

    if (!message) {
      return NextResponse.json({ error: "Missing question" }, { status: 400 });
    }

    const prompt = `
      We are having a conversation in a group chat. The following messages have been exchanged:
      ${messageList}

      Given the following list of users:
      ${userList}

      And the sentence:
      "${message}"

      Identify which user's name appears in the sentence and return ONLY their userId as a JSON object:
      { "userId": "..." }

      If no name matches get context of prevoious messages and return userId which is best match, return:
      { "userId": null }

      please only return the JSON object and nothing else
      `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 1,
      max_completion_tokens: 1024,
    });

    const response = chatCompletion.choices[0].message.content;
    const json = JSON.parse(response);

    return NextResponse.json(json);
  } catch (error) {
    console.error("GROQ API Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
