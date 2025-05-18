import React, { use, useEffect } from "react";
import { Header } from "../Header/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChatHead } from "./ChatHead/ChatHead";
import ChatSideBar from "../ChatSidebar";
import { useRtcContext } from "@/app/page";
import { getAnswer, getNextMessageUserId, saveMessage } from "@/services/chat.service";
import { currentUser } from "@/lib/utils";
import RichInput from "./RichInput";

export const ChatBlock = () => {
  const { messages, setMessages, currentChat, handleTyping, handleTypingEnd } = useRtcContext();
  const userIndexRef = React.useRef({});
  const lastMessageRef = React.useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  const typingText = React.useMemo(() => {
    const typingUser = currentChat.users.find((user) => user.typing);
    if (!typingUser) return null;
    return `${typingUser.name} is typing...`;
  }, [currentChat]);

  useEffect(() => {
    const userIndex = {};
    currentChat.users.forEach((user) => {
      userIndex[user.userId] = user;
    });
    userIndexRef.current = userIndex;
  }, [currentChat.groupId]);

  const handleSendMessage = async (message, user_id) => {
    const chat_id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    await saveMessage(currentChat.groupId, user_id, message);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        groupId: currentChat.groupId,
        sender: user_id,
        content: message,
        id: chat_id,
        timtimestamp: Date.now(),
      },
    ]);
  };

  const onInputSubmit = async (value) => {
    handleSendMessage(value, currentUser.userId);
    const otherUsers = currentChat.users.filter((u) => u.userId !== currentUser.userId);
    const nextUserId = await getNextMessageUserId(otherUsers, messages, value);
    if (nextUserId) {
      const randomTimeout = Math.floor(Math.random() * 5 + 1) * 1000;
      handleTyping(nextUserId);
      setTimeout(() => {
        ansToUserId(value, nextUserId);
      }, randomTimeout);
    } else {
      const randomTimeout = Math.floor(Math.random() * 5 + 1) * 1000;
      const randomUser = otherUsers[Math.floor(Math.random() * otherUsers.length)];
      setTimeout(() => {
        const randomTimeout2 = Math.floor(Math.random() * 5 + 1) * 1000;
        handleTyping(randomUser.userId);
        setTimeout(() => {
          ansToUserId(value, randomUser.userId);
        }, randomTimeout2);
      }, randomTimeout);
    }
  };

  const ansToUserId = async (message, userId) => {
    const answer = await getAnswer(currentChat.users, messages, message);
    if (answer) {
      handleSendMessage(answer, userId);
    }
    handleTypingEnd(userId);
  };

  return (
    <section className="h-screen w-full bg-white flex flex-col">
      <Header />
      <div className="h-96 grow p-4">
        <div className="rounded-3xl bg-white shadow border border-solid border-gray-200 h-full flex flex-wrap">
          <ChatSideBar />
          <div className="w-2/4 h-full grow flex flex-col">
            <ChatHead />
            <ScrollArea className="h-[calc(100dvh_-_220px)] w-full p-4 [&>div]:max-w-full [&>div>div]:max-w-full [&>div>div]:block">
              <ul className="flex flex-col gap-2 max-w-full">
                {messages.length === 0 && (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-sm text-gray-600">No messages yet</p>
                  </div>
                )}
                {messages.map((message, index) => {
                  return (
                    <li
                      key={message.id}
                      ref={index === messages.length - 1 ? lastMessageRef : null}
                      className={`max-w-4/6 ${message.sender === currentUser.userId ? "ml-auto" : "mr-auto"} w-fit`}
                    >
                      {message.sender !== currentUser.userId && (
                        <span className="text-xs text-[#5956FC] font-medium">{userIndexRef.current?.[message.sender].name}</span>
                      )}
                      <span className={`block text-sm font-medium DMSans bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl ${message.sender === currentUser.userId ? "rounded-br-xs" : "rounded-bl-xs"} w-fit`}>
                        {message.content}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </ScrollArea>
            {typingText ? <span className="text-gray-500 text-xs p-3"> {typingText}</span> : null}
            <div className="flex items-center gap-3 border-t border-solid border-gray-200 py-2 px-4 cursor-pointer shrink-0">
              <RichInput onInputSubmit={onInputSubmit} users={currentChat.users} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
