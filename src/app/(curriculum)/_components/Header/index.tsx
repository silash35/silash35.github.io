import en from "./locale/en.json";
import pt from "./locale/pt.json";

interface Props {
  locale?: string;
}

import styles from "./header.module.scss";

const Header = ({ locale }: Props) => {
  const l = locale === "pt" ? pt : en;

  return (
    <header className={styles.header}>
      <h1>Silas Henrique Alves Araújo</h1>

      <p>{l.dateOfBirth}</p>

      <p>
        {l.email}:{" "}
        <a href="mailto:silash35@gmail.com" title={l.emailTitle}>
          silash35@gmail.com
        </a>
      </p>
      <p>
        {l.phone}:{" "}
        <a href="tel:+5571987529296" title={l.phoneTitle}>
          +55 71 98752-9296
        </a>
      </p>
      <p>{l.address}</p>
    </header>
  );
};

export default Header;
