import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Titlebar from "@/components/titlebar";
import Sidebar from "@/components/sidebar";
import ExplorerBar from "@/components/explorerbar";
import Bottombar from "@/components/bottombar";
import "../style/layout.css";
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
        <div className="main">
          <Sidebar />
          <ExplorerBar />
          <div style={{ width: "100%" }}>{/* <Tabsbar /> */}</div>
          <main id="main-editor" className="content">
            {children}
          </main>
        </div>
        <Bottombar />
      </body>
    </html>
  );
}
