import React from "react";
import Link from "next/link";
import SourceControlIcon from "./icons/SourceControllcon";
import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import NextjsIcon from "./icons/NextjsIcon";
import CheckIcon from "./icons/CheckIcon";
import BellIcon from "./icons/BellIcon";
import "../style/footer.css";

type Props = {};

const Bottombar = (props: Props) => {
  return (
    <footer className="bottomBar">
      <div className="bottomBarcontainer">
        <Link
          className="bottomBarSection"
          href="https://github.com/NHBakli"
          target="_blank"
        >
          <SourceControlIcon />
          <p>main</p>
        </Link>
        <div className="bottomBarSection">
          <ErrorIcon />
          <p>0</p>&nbsp;&nbsp;
          <WarningIcon />
          <p>0</p>
        </div>
      </div>
      <div className="bottomBarcontainer">
        <div className="bottomBarSection">
          <NextjsIcon />
          <p>Powered by Next.js</p>
        </div>
        <div className="bottomBarSection">
          <CheckIcon />
          <p>Prettier</p>
        </div>
        <div className="bottomBarSection">
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
