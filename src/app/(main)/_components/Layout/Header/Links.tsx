import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  activeClass: string;
}

const Links = ({ activeClass }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <li className={pathname === "/" ? activeClass : undefined}>
        <Link href="/">Home</Link>
      </li>
      <li className={pathname === "/resume" ? activeClass : undefined}>
        <Link href="/resume">Resume</Link>
      </li>
      <li className={pathname === "/portfolio" ? activeClass : undefined}>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li className={pathname === "/contact" ? activeClass : undefined}>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
};

export default Links;
