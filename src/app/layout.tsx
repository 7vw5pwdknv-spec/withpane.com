import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HOLDRY | Private Acquisition Platform",
  description:
    "HOLDRY partners with exceptional operators to acquire and grow essential service businesses across the United States.",
  openGraph: {
    title: "HOLDRY | Private Acquisition Platform",
    description:
      "HOLDRY partners with exceptional operators to acquire and grow essential service businesses across the United States.",
    url: "https://holdry.com",
    siteName: "HOLDRY",
    type: "website"
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
