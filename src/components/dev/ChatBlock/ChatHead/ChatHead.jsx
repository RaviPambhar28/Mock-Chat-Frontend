import { useRtcContext } from "@/app/page";
import { Button } from "@/components/ui/button";
import React from "react";

export const ChatHead = () => {
  const { currentChat } = useRtcContext();
  return (
    <div className="flex items-center justify-between gap-3 border-b border-solid border-gray-200 py-2 px-3">
      <div className="flex items-center gap-2.5">
        <Button
          variant={"ghost"}
          className="rounded-full size-10 p-0 hover:bg-white border border-solid border-gray-200 cursor-pointer relative"
        >
          <img src={currentChat?.avatar} className="size-full object-cover rounded-full" alt="profile" />
          <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </Button>
        <div className="w-2/4 grow block">
          <h4 className="font-semibold text-base leading-none DMSans whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
            {currentChat.groupName}
          </h4>
          <p className="text-sm text-gray-600 whitespace-nowrap max-w-full w-full overflow-hidden text-ellipsis block DMSans">
            {currentChat.users.length} members
          </p>
        </div>
      </div>
    </div>
  );
};
