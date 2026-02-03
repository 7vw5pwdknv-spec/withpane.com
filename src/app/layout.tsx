import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HOLDRY | AI-Native Holding Company",
  description: "The first AI-native holding company. We use artificial intelligence to operate, analyze, and grow businesses across technology, infrastructure, and essential systems.",
  openGraph: {
    title: "HOLDRY | AI-Native Holding Company",
    description: "The first AI-native holding company. We use artificial intelligence to operate, analyze, and grow businesses.",
    url: "https://holdry.com",
    siteName: "HOLDRY",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HOLDRY | AI-Native Holding Company",
    description: "The first AI-native holding company. We use artificial intelligence to operate, analyze, and grow businesses."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-charcoal text-sand">
      <body className={`${inter.variable} bg-charcoal text-sand`}>{children}</body>
    </html>
  );
}
