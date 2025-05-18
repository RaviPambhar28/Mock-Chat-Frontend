import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function RichInput({ onInputSubmit, users }) {
  const [input, setInput] = useState("");
  const [mentionQuery, setMentionQuery] = useState("");
  const [showMentions, setShowMentions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const lastWord = value.split(/\s/).pop();
    if (lastWord.startsWith("@")) {
      setMentionQuery(lastWord.slice(1));
      setShowMentions(true);
    } else {
      setShowMentions(false);
    }
  };

  const handleSelectUser = (username) => {
    const words = input.split(/\s/);
    words[words.length - 1] = `@${username}`;
    setInput(words.join(" ") + " ");
    setShowMentions(false);
  };

  const filteredUsers = users.filter((u) => u.name.toLowerCase().startsWith(mentionQuery.toLowerCase()));

  return (
    <form
      className="flex items-center gap-3 w-2/4 grow relative"
      onSubmit={(e) => {
        e.preventDefault();
        onInputSubmit(input);
        setInput("");
      }}
    >
      {showMentions && mentionQuery && (
        <ul className="absolute left-0 top-12 z-20 bg-white border rounded-lg shadow-lg w-56 max-h-48 overflow-y-auto">
          {filteredUsers.map((user) => (
            <li
              key={user.userId}
              onClick={() => handleSelectUser(user.name)}
              className="p-2 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              @{user.name}
            </li>
          ))}
          {filteredUsers.length === 0 && <li className="p-2 text-gray-500">No users found</li>}
        </ul>
      )}
      <Input
        placeholder="Message"
        value={input}
        onChange={handleChange}
        className="w-2/4 grow rounded-full py-3 px-5 bg-white shadow-md border border-gray-200 focus:ring-2 focus:ring-blue-200 transition-all"
        style={{ minHeight: "44px" }}
      />
      <Button
        className="rounded-full size-10 p-1.5 shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        type="submit"
      >
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
  );
}

export default RichInput;
