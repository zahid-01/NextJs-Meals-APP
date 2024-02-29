"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

const NavLink = ({ url, children }) => {
  const path = usePathname();
  return (
    <Link
      href={url}
      className={path.startsWith(url) ? styles.active : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
