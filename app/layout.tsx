import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const garamond = EB_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Haruto — Product Designer + Engineer",
  description: "Designing bilingual experiences bridging Japan and the U.S.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${garamond.variable} antialiased`}>
        <Cursor />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
