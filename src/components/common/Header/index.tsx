import Link from "next/link";
import { useState } from "react";

import styles from "./header.module.scss";
import Links from "./links";
import Sidebar from "./Sidebar";

interface Props {
  home?: boolean;
  resume?: boolean;
  portfolio?: boolean;
  contact?: boolean;
}

export default function Header(props: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <button
          aria-label="Open Menu"
          className={styles.sidenavTrigger}
          onClick={() => setOpen(true)}
        >
          <img src="/images/icons/white/menu.svg" alt="menu Icon" width="32" height="32" />
        </button>

        <Link href="/">
          <a className={styles.logoContainer} title="Go to home page">
            <img src="/icon.svg" alt="Silas Henrique Icon" width="64" height="64" />
          </a>
        </Link>

        <ul className={styles.navLinks}>
          <Links activeClass={styles.active} {...props} />
        </ul>
      </nav>

      <Sidebar open={open} setOpen={setOpen} {...props} />
    </header>
  );
}
