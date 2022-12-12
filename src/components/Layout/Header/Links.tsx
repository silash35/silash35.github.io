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
        <Link href="/">Home</Link>
      </li>
      <li className={resume ? activeClass : undefined}>
        <Link href="/resume">Resume</Link>
      </li>
      <li className={portfolio ? activeClass : undefined}>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li className={contact ? activeClass : undefined}>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
}
