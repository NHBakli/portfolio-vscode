"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../style/Tab.module.css";

interface TabProps {
  icon: string;
  filename: string;
  path: string;
}

const Tab: React.FC<TabProps> = ({ icon, filename, path }) => {
  const pathname = usePathname();

  return (
    <Link href={path} className={styles.link}>
      <div className={`${styles.tab} ${pathname === path && styles.active}`}>
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
