import React from "react";
import Image from "next/image";
import "../style/titlebar.css";

export default function Titlebar() {
  return (
    <div>
      <section className="titlebar">
        <Image
          src="/vscode_icon.svg"
          alt="VSCode Icon"
          height={15}
          width={15}
          className="titlebarIcons"
        />
        <div className="titlebarItems">
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
        <p className="titlebarTitle">NHBakli - Visual Studio Code</p>
        <div className="titlebarButtons">
          <span className="titlebarYellow"></span>
          <span className="titlebarGreen"></span>
          <span className="titlebarRed"></span>
        </div>
      </section>
    </div>
  );
}
