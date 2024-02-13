import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Titlebar from "@/components/titlebar";
import Sidebar from "@/components/sidebar";
import Bottombar from "@/components/bottombar";
import "../style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NHBakli",
  description: "Portfolio create by NHBakli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Titlebar />
        <Sidebar />
        <Bottombar />
        {children}
      </body>
    </html>
  );
}
