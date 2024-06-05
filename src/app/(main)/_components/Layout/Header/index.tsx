"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./header.module.scss";
import Links from "./Links";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebar] = useState(false);

  const clickHandler = () => {
    if (sidebarOpen) {
      document.body.style.overflow = "unset";
      setSidebar(false);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
      setSidebar(true);
    }
  };

  return (
    <header className={styles.header}>
      <Link className={styles.logoContainer} href="/" title="Home page">
        <picture>
          <source media="(min-width: 425px)" srcSet="/logo.svg" />
          <img alt="Silas Henrique logo" height="48" src="/silas-icon.svg" />
        </picture>
      </Link>

      <nav className={styles.desktopNav}>
        <ul>
          <Links activeClass={styles.active} />
        </ul>
      </nav>

      <button aria-label="Open menu" className={styles.sidebarButton} onClick={clickHandler}>
        <MenuIcon isOpen={sidebarOpen} />
      </button>

      <Sidebar isOpen={sidebarOpen} />
    </header>
  );
};

export default Header;
