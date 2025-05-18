import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { users, messages, message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Missing question" }, { status: 400 });
    }

    const system_prompt = `Your role is to respond only when someone directly asks a question.
         Answer naturally and conversationally, as if you're part of a casual group chat with friends or colleagues. 
         Do not provide extra commentary or summaries. Just answer the specific question asked, clearly and concisely. 
         Stay in context and match the tone of a real-life group conversation.
         
         Users in chats are ${users.join(", ")}.
         Previous Messages are ${messages.map((msg) => `${msg.sender}: ${msg.content}`).join(", ")}.
         `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: system_prompt,
        },
        { role: "user", content: message },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 1,
      max_completion_tokens: 1024,
    });

    return NextResponse.json({
      answer: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.error("GROQ API Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
