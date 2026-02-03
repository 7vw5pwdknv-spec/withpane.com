import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HOLDRY",
  description: "Private operations across technology, infrastructure, and essential systems.",
  openGraph: {
    title: "HOLDRY",
    description: "Private operations across technology, infrastructure, and essential systems.",
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
      <body className={\`\${inter.variable} bg-charcoal text-sand\`}>{children}</body>
    </html>
  );
}
