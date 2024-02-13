"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ChevronRight from "./icons/ChevronRight";
import "../style/explorerbar.css";

interface ExplorerItem {
  name: string;
  path: string;
  icon: string;
}

const explorerItems: ExplorerItem[] = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "js_icon.svg",
  },
  {
    name: "articles.json",
    path: "/articles",
    icon: "json_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "markdown_icon.svg",
  },
];

const ExplorerBar = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className="explorer">
      <p className="title">Explorer</p>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className="heading">
          <ChevronRight
            className="chevron"
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className="files"
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className="file">
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{" "}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorerBar;
