import ImageModal from "@/components/common/ImageModal";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <section className={styles.title}>
        <h1>Silas Henrique Alves Araújo</h1>
        <ImageModal
          borderRadius="25%"
          className={styles.photo}
          imageProps={{
            src: "/images/profile.webp",
            alt: "Photo of silas Henrique Alves Araújo",
            loading: "lazy",
            width: "256",
            height: "256",
          }}
        />
      </section>
      <section className={styles.information}>
        <ul>
          <li>
            <img
              width="24"
              height="24"
              src="/images/icons/white/cake-variant.svg"
              alt="cake Icon"
            />
            February 2, 2003
          </li>
          <li>
            <img width="24" height="24" src="/images/icons/white/email.svg" alt="email Icon" />
            <a href="mailto:silash35@gmail.com" title="Silas Henrique's e-mail address">
              silash35@gmail.com
            </a>
          </li>
          <li>
            <img width="24" height="24" src="/images/icons/white/phone.svg" alt="phone Icon" />
            <a href="tel:+5571987529296" title="Phone number of Silas Henrique">
              +55 71 98752-9296
            </a>
          </li>
          <li>
            <img width="24" height="24" src="/images/icons/white/map-marker.svg" alt="local Icon" />
            Simões Filho, Bahia, Brazil
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
