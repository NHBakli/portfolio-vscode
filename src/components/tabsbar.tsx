import Tab from "./tab";
import styles from "../style/Tabsbar.module.css";

interface TabsbarProps {}

export default function Tabsbar(props: TabsbarProps) {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/json_icon.svg" filename="skills.json" path="/skills" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
}
