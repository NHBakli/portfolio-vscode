"use client";
import GithubIcon from "./icons/GithubIcon";
import FilesIcon from "./icons/FilesIcon";
import CodeIcon from "./icons/CodeIcon";
import SkillsIcon from "./icons/SkillsIcon";
import MailIcon from "./icons/MailIcon";
import AccountIcon from "./icons/AccountIcon";
import SettingsIcon from "./icons/SettingsIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "../style/sidebar.css";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    Icon: SkillsIcon,
    path: "/skills",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="containerTop">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path} className="icon">
            <div
              className={`iconContainer ${pathname === path ? "active" : ""}`}
            >
              <Icon
                fill={
                  pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="containerBottom">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className="iconContainer" key={path}>
            <Link href={path} className="icon">
              <Icon
                fill={
                  pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
