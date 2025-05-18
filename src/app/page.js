"use client";
import { ChatBlock } from "@/components/dev/ChatBlock/ChatBlock";
import { mockChatDetails } from "@/lib/utils";
import { getMessagesByGroup, openChatDB } from "@/services/chat.service";
import { useState, createContext, useContext, useEffect, use } from "react";

const RtcContext = createContext();
export const useRtcContext = () => useContext(RtcContext);

export default function Home() {
  const [currentChat, setCurrentChat] = useState(mockChatDetails[0]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      await openChatDB();
    }, 100);
  }, [currentChat.groupId]);

  useEffect(() => {
    const getMesssage = async () => {
      if (currentChat.groupId) {
        const messages = await getMessagesByGroup(currentChat.groupId);
        setMessages(messages);
      }
    };
    getMesssage();
  }, [currentChat.groupId]);

  const handleTyping = (userId) => {
    const user = currentChat.users.find((user) => user.userId === userId);
    if (!user) return;
    setCurrentChat((prev) => ({ ...prev, users: prev.users.map((u) => (u.userId === userId ? { ...u, typing: true } : u)) }));
  };

  const handleTypingEnd = (userId) => {
    const user = currentChat.users.find((user) => user.userId === userId);
    if (!user) return;
    setCurrentChat((prev) => ({ ...prev, users: prev.users.map((u) => (u.userId === userId ? { ...u, typing: false } : u)) }));
  };

  return (
    <RtcContext.Provider value={{ currentChat, setCurrentChat, messages, setMessages, handleTyping, handleTypingEnd }}>
      <ChatBlock />
    </RtcContext.Provider>
  );
}
