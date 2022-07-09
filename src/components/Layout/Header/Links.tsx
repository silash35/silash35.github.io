import Link from "next/link";

import { ActivePage } from "../activePage";

interface Props {
  activePage: ActivePage;
  activeClass: string;
}

export default function Links({ activePage, activeClass }: Props) {
  const { home, resume, portfolio, contact } = activePage;
  return (
    <>
      <li className={home ? activeClass : undefined}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={resume ? activeClass : undefined}>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </li>
      <li className={portfolio ? activeClass : undefined}>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li className={contact ? activeClass : undefined}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </>
  );
}
