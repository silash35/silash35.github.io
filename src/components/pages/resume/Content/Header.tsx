import ImageModal from "@/components/common/ImageModal";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <section className={styles.title}>
        <h1>Silas Henrique Alves Araújo</h1>
        <ImageModal
          imageProps={{
            src: "/images/profile.webp",
            alt: "Photo of silas Henrique Alves Araújo",
            loading: "lazy",
            width: "256",
            height: "256",
          }}
          borderRadius="25%"
          className={styles.photo}
        />
      </section>
      <section className={styles.information}>
        <ul>
          <li>
            <img
              alt="cake Icon"
              height="24"
              src="/images/icons/white/cake-variant.svg"
              width="24"
            />
            February 2, 2003
          </li>
          <li>
            <img alt="email Icon" height="24" src="/images/icons/white/email.svg" width="24" />
            <a href="mailto:silash35@gmail.com" title="Silas Henrique's e-mail address">
              silash35@gmail.com
            </a>
          </li>
          <li>
            <img alt="phone Icon" height="24" src="/images/icons/white/phone.svg" width="24" />
            <a href="tel:+5571987529296" title="Phone number of Silas Henrique">
              +55 71 98752-9296
            </a>
          </li>
          <li>
            <img alt="local Icon" height="24" src="/images/icons/white/map-marker.svg" width="24" />
            Simões Filho, Bahia, Brazil
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
