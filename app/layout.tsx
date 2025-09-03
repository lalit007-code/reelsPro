import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "ReelsView - Discover Amazing Reels",
  description:
    "Experience the next generation of short-form content. Upload, discover, and share stunning reels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Providers>
          <main className="pb-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
