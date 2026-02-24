import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pane — AI Chief of Staff for macOS",
  description:
    "An AI agent that manages your Calendar, Reminders, Notes, Mail, and Messages — so you don't have to.",
  openGraph: {
    title: "Pane — AI Chief of Staff for macOS",
    description: "AI that executes work on your Mac, not just chats.",
    url: "https://withpane.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pane — AI Chief of Staff for macOS",
    description: "AI that executes work on your Mac, not just chats.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${dmMono.variable} font-sans antialiased`}
      >
        {/* Ambient glow — layered for depth */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-[40vh] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] rounded-full bg-accent/[0.06] blur-[140px]" />
          <div className="absolute top-[30vh] -right-[25vw] w-[50vw] h-[50vh] rounded-full bg-accent-2/[0.03] blur-[120px]" />
          <div className="absolute top-[70vh] -left-[15vw] w-[40vw] h-[40vh] rounded-full bg-accent-3/[0.02] blur-[100px]" />
        </div>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
