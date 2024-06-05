"use client";

import Link from "next/link";

// import Sidebar from "./Sidebar";
import useToggle from "@/utils/hooks/useToggle";

import styles from "./header.module.scss";
import Links from "./Links";
import MenuIcon from "./MenuIcon";

const Header = () => {
  const [showSidebar, toggleSidebar] = useToggle(false);

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

      <button aria-label="Open Menu" className={styles.sidebarButton} onClick={toggleSidebar}>
        <MenuIcon isOpen={showSidebar} />
      </button>

      {/* <Sidebar isOpen={showSidebar} setIsOpen={setSidebar} /> */}
    </header>
  );
};

export default Header;
