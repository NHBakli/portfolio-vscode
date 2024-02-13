import GithubIcon from "./icons/GithubIcon";
import FilesIcon from "./icons/FilesIcon";
import CodeIcon from "./icons/CodeIcon";
import PencilIcon from "./icons/PencilIcon";
import MailIcon from "./icons/MailIcon";
import AccountIcon from "./icons/AccountIcon";
import SettingsIcon from "./icons/SettingsIcon";
import Link from "next/link";
import "../style/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="containerTop">
        <Link className="icon" href="#">
          <FilesIcon />
        </Link>
        <Link className="icon" href="#">
          <GithubIcon />
        </Link>
        <Link className="icon" href="#">
          <CodeIcon />
        </Link>
        <Link className="icon" href="#">
          <PencilIcon />
        </Link>
        <Link className="icon" href="#">
          <MailIcon />
        </Link>
      </div>
      <div className="containerBottom">
        <Link className="icon" href="#">
          <AccountIcon />
        </Link>
        <Link className="icon" href="#">
          <SettingsIcon />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
