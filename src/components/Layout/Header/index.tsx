import Link from "next/link";
import { useState } from "react";

import { ActivePage } from "../activePage";
import styles from "./header.module.scss";
import Links from "./Links";
import Sidebar from "./Sidebar";

interface Props {
  activePage: ActivePage;
}

export default function Header(props: Props) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <button
          aria-label="Open Menu"
          className={styles.sidenavTrigger}
          onClick={() => setSidebarIsOpen(true)}
        >
          <img src="/images/icons/white/menu.svg" alt="menu Icon" width="32" height="32" />
        </button>

        <Link href="/">
          <a className={styles.logoContainer} title="Go to home page">
            <img src="/icon.svg" alt="Silas Henrique Icon" width="64" height="64" />
          </a>
        </Link>

        <ul className={styles.navLinks}>
          <Links activeClass={styles.active} activePage={props.activePage} />
        </ul>
      </nav>

      <Sidebar isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen} activePage={props.activePage} />
    </header>
  );
}
