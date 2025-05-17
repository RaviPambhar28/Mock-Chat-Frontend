import React from "react";
import { Header } from "../Header/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ChatHead } from "./ChatHead/ChatHead";
import ChatSideBar from "../ChatSidebar";
import { useRtcContext } from "@/app/page";
import { saveMessage } from "@/services/chat.service";
import { currentUser } from "@/lib/utils";

export const ChatBlock = () => {
  const { messages, setMessages, currentChat } = useRtcContext();
  const [inputValue, setInputValue] = React.useState("");

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

  const onInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    handleSendMessage(inputValue, currentUser.userId);
    setInputValue("");
  };

  return (
    <section className="h-screen w-full bg-white flex flex-col">
      <Header />
      <div className="h-96 grow p-4">
        <div className="rounded-3xl bg-white shadow border border-solid border-gray-200 h-full flex flex-wrap">
          <ChatSideBar />
          <div className="w-2/4 h-full grow flex flex-col">
            <ChatHead />
            <ScrollArea className="h-[calc(100dvh_-_224px)] w-full p-4">
              <ul className="flex flex-col gap-2">
                {messages.length === 0 && (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-sm text-gray-600">No messages yet</p>
                  </div>
                )}
                {messages.map((message) => {
                  return (
                    <li
                      key={message.id}
                      className={`text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl ${
                        message.sender === currentUser.userId ? "rounded-br-xs ml-auto" : "rounded-bl-xs mr-auto"
                      } w-fit`}
                    >
                      {message.content}
                    </li>
                  );
                })}
              </ul>
            </ScrollArea>
            <div className="flex items-center gap-3 border-t border-solid border-gray-200 py-2 px-4 cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <Button className={"rounded-full size-10 p-1.5"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className={"w-36 p-0 overflow-hidden"}>
                  <ul>
                    <li className="flex items-center gap-3 cursor-pointe p-3 relative bg-white hover:bg-gray-50 transition duration-150 ease-in">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      <span className="text-sm">File</span>
                      <input type="file" className="absolute top-0 left-0 opacity-0 z-10 w-full h-full" name="" id="" />
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
              <form className="flex items-center gap-3 w-2/4 grow" onSubmit={onInputSubmit}>
                <Input
                  placeholder="Message"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className={"w-2/4 grow rounded-full py-2.5"}
                />
                <Button className={"rounded-full size-10 p-1.5"} type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
