import Link from "next/link";
import { useState } from "react";

import { ActivePage } from "../activePage";
import styles from "./header.module.scss";
import Links from "./Links";
import Sidebar from "./Sidebar";

interface Props {
  activePage: ActivePage;
}

const Header = (props: Props) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

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
          <Links activeClass={styles.active} activePage={props.activePage} />
        </ul>
      </nav>

      <Sidebar activePage={props.activePage} isOpen={sidebarIsOpen} setIsOpen={setSidebarIsOpen} />
    </header>
  );
};

export default Header;
