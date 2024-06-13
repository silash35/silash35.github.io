"use client";

import { useState } from "react";

import Link from "@/components/Link";

import styles from "./header.module.scss";
import Links from "./Links";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";

// On Firefox, window.scrollTo doesn't work when body overflow is set to hidden. So we have to do await the scroll end before disable user scroll.
const asyncScrollToTop = async () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  let timer = 0;
  while (timer < 1000 && window.scrollY > 0) {
    await new Promise((r) => setTimeout(r, 20));
    timer += 20;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
};

const Header = () => {
  const [sidebarOpen, setSidebar] = useState(false);

  const clickHandler = async () => {
    if (sidebarOpen) {
      setSidebar(false);
      document.body.style.overflow = "unset";
    } else {
      setSidebar(true);
      await asyncScrollToTop();
      document.body.style.overflow = "hidden";
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

      <Sidebar isOpen={sidebarOpen} setIsOpen={clickHandler} />
    </header>
  );
};

export default Header;
