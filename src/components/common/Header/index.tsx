import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.standardHeader}>
      <nav>
        <button aria-label="Open Menu" className="sidenavTrigger">
          <img src="/images/icons/white/menu.svg" alt="menu Icon" width="35" height="35" />
        </button>

        <a className="logoContainer" href="index.html">
          <img src="/icon.svg" alt="Silas Henrique Icon" width="70" height="70" />
        </a>

        <ul className="navLinks">
          <li className="{{activeHome}}">
            <a href="index.html" title="Home page">
              Home
            </a>
          </li>
          <li className="{{activeResume}}">
            <a href="resume.html" title="Resume">
              Resume
            </a>
          </li>
          <li className="{{activePortfolio}}">
            <a href="portfolio.html" title="Portfolio">
              Portfolio
            </a>
          </li>
          <li className="{{activeContact}}">
            <a href="contact.html" title="Contact">
              Contact
            </a>
          </li>
        </ul>

        <button aria-label="Close Menu" className="screenDarkener"></button>
      </nav>
    </header>
  );
}
