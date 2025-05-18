import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, mockChatDetails } from "@/lib/utils";
import { useRtcContext } from "@/app/page";

function ChatSideBar() {
  const { currentChat, setCurrentChat } = useRtcContext();

  const typingText = React.useMemo(() => {
    const typingUser = currentChat.users.find((user) => user.typing);
    if (!typingUser) return null;
    return `${typingUser.name} is typing...`;
  }, [currentChat]);

  return (
    <div className="w-1/4 h-full border-r border-solid border-gray-200">
      <ScrollArea className="h-[calc(100dvh_-_105px)] w-full p-4 [&>div]:max-w-full [&>div>div]:max-w-full [&>div>div]:!block">
        <ul className="flex flex-col gap-2.5">
          {mockChatDetails.map((group) => {
            return (
              <li
                key={group.groupId}
                onClick={() => setCurrentChat(group)}
                className={cn(
                  "flex items-center gap-2.5 border border-solid border-transparent hover:border-gray-100 hover:bg-gray-50 cursor-pointer p-1 rounded-xl max-w-full overflow-ellipsis",
                  currentChat.groupId === group.groupId ? "border-gray-200 bg-gray-50" : ""
                )}
              >
                <div className="size-10 relative rounded-full border border-solid border-gray-200">
                  <img src={group.avatar} className="size-full rounded-full object-cover" alt="profile img" />
                  <span className="bottom-0 -right-1 absolute w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="w-2/4 grow block">
                  <h4 className="font-semibold text-base DMSans whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                    {group.groupName}
                  </h4>
                  <p className="text-sm text-gray-600 whitespace-nowrap max-w-full w-full overflow-hidden text-ellipsis block DMSans">
                    {typingText && currentChat.groupId === group.groupId ? typingText : group.quote}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}

export default ChatSideBar;
