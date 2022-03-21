import Link from "next/link";

interface Props {
  home?: boolean;
  resume?: boolean;
  portfolio?: boolean;
  contact?: boolean;
  activeClass: string;
}

export default function Links({ home, resume, portfolio, contact, activeClass }: Props) {
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
