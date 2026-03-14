import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Haruto — Product Designer + Engineer",
  description: "Designing bilingual experiences bridging Japan and the U.S.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
