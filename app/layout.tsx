import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Haruto — Product Designer + Engineer",
  description: "Designing bilingual experiences bridging Japan and the U.S.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=zodiak@400,400i,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${GeistSans.variable} antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
