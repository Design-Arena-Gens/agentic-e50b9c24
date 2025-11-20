import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bramhcharya Ebook | Transform Your Energy",
  description:
    "Discover a modern guide to Bramhcharya with practical frameworks, mindful rituals, and reflective exercises to cultivate discipline and inner clarity.",
  openGraph: {
    title: "Bramhcharya Ebook | Transform Your Energy",
    description:
      "A mindful roadmap to harnessing your creative energy through Bramhcharya. Learn frameworks, rituals, and reflective practices for everyday life.",
    url: "https://agentic-e50b9c24.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bramhcharya Ebook | Transform Your Energy",
    description:
      "A mindful roadmap to harnessing your creative energy through Bramhcharya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
