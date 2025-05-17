import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Real-time group chat",
  description: "Social Media & Communication : Real-time group chat mockup with typing indicators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased h-screen h-full`}>
        {children}
      </body>
    </html>
  );
}
