import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const mockChatDetails = [
  {
    groupId: 1,
    groupName: "Avengers",
    avatar: "/images/avengers.jpeg",
    quote: "This group chat is 10% plans, 90% chaos—and I wouldn’t have it any other way",
    users: [
      { userId: 1, name: "Ravi", avatar: "", typing: false },
      { userId: 2, name: "Tony", avatar: "", typing: false },
      { userId: 3, name: "Steve", avatar: "", typing: false },
      { userId: 4, name: "Bruce", avatar: "", typing: false },
      { userId: 5, name: "Natasha", avatar: "", typing: false },
      { userId: 6, name: "Clint", avatar: "", typing: false },
      { userId: 7, name: "Thor", avatar: "", typing: false },
      { userId: 8, name: "Hawkeye", avatar: "", typing: false },
    ],
  },
  {
    groupId: 2,
    groupName: "Justice League",
    avatar: "/images/jsluege.jpg",
    quote: "We may not always make sense, but at least we’re all confused together.",
    users: [
      { userId: 1, name: "Ravi", avatar: "", typing: false },
      { userId: 4, name: "Bruce", avatar: "", typing: false },
      { userId: 5, name: "Clark", avatar: "", typing: false },
      { userId: 6, name: "Diana", avatar: "", typing: false },
      { userId: 9, name: "Barry", avatar: "", typing: false },
    ],
  },
  {
    groupId: 3,
    groupName: "Techies",
    avatar: "/images/jsluege.jpg",
    quote: "Proof that one brain cell can be shared by many.",
    users: [
      { userId: 1, name: "Ravi", avatar: "", typing: false },
      { userId: 7, name: "Alice", avatar: "", typing: false },
      { userId: 8, name: "Bob", avatar: "", typing: false },
    ],
  },
  {
    groupId: 4,
    groupName: "Gamers",
    avatar: "/images/jsluege.jpg",
    quote: "We’re not just a group; we’re a gaming family.",
    users: [
      { userId: 1, name: "Ravi", avatar: "", typing: false },
      { userId: 10, name: "Nina", avatar: "", typing: false },
      { userId: 11, name: "Leo", avatar: "", typing: false },
      { userId: 12, name: "Max", avatar: "", typing: false },
    ],
  },
];

export const currentUser = {
  userId: 1,
  name: "Ravi",
  avatar: "/images/profile.jpg",
  email: "ravi28@gmail.com",
  contact: "+919696565632",
};
