"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./header.module.scss";
import Links from "./Links";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  let pathname = usePathname();
  if (pathname === null) {
    pathname = "";
  }

  return (
    <header className={styles.header}>
      <nav>
        <button
          aria-label="Open Menu"
          className={styles.sidenavTrigger}
          onClick={() => setSidebarIsOpen(true)}
        >
          <img alt="menu Icon" height="32" src="/images/icons/white/menu.svg" width="32" />
        </button>

        <Link className={styles.logoContainer} href="/" title="Go to home page">
          <img alt="Silas Henrique Icon" height="64" src="/icon.svg" width="64" />
        </Link>

        <ul className={styles.navLinks}>
          <Links activeClass={styles.active} pathname={pathname} />
        </ul>
      </nav>

      <Sidebar isOpen={sidebarIsOpen} pathname={pathname} setIsOpen={setSidebarIsOpen} />
    </header>
  );
};

export default Header;
