import type { Metadata } from "next";
import Navbar from "@/sections/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Moghrabi | Full Stack Web Developer",
  description:
    "Portfolio of Ali Moghrabi — a passionate full-stack web developer specializing in modern React, Next.js, and Node.js applications.",
  keywords: [
    "Ali Moghrabi",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Web Developer Lebanon",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Nest.js",
  ],
  authors: [{ name: "Ali Moghrabi", url: "https://alimoghrabi.dev" }],
  creator: "Ali Moghrabi",
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
  },
  openGraph: {
    title: "Ali Moghrabi | Full Stack Web Developer",
    description:
      "Explore the professional portfolio of Ali Moghrabi, a full-stack web developer building performant and user-focused web apps with React, Next.js, and Node.js.",
    url: "https://alimoghrabi.dev",
    siteName: "Ali Moghrabi Portfolio",
    images: [
      {
        url: "/assets/display.png",
        width: 1904,
        height: 841,
        alt: "Ali Moghrabi Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://alimoghrabi.dev"),
  themeColor: "#000000",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="container mx-auto max-w-7xl">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
