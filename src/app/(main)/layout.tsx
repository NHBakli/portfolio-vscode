import Titlebar from "@/components/titlebar";
import Sidebar from "@/components/sidebar";
import ExplorerBar from "@/components/explorerbar";
import Bottombar from "@/components/bottombar";
import Tabsbar from "@/components/tabsbar";
import "../../style/layout.css";
import "../../style/globals.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Titlebar />
      <div className="main">
        <Sidebar />
        <ExplorerBar />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <main id="main-editor" className="content">
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}
