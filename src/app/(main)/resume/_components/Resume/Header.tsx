import CakeIcon from "@/components/icons/Cake";
import EmailIcon from "@/components/icons/Email";
import MarkerIcon from "@/components/icons/Marker";
import PhoneIcon from "@/components/icons/Phone";
import ImageModal from "@/components/ImageModal";

import styles from "./header.module.scss";

const Header = () => (
  <header>
    <div className={styles.title}>
      <h1>Silas Henrique Alves Araújo</h1>

      <ImageModal
        imageProps={{
          src: "/images/profile.webp",
          alt: "Photo of silas Henrique Alves Araújo",
          loading: "lazy",
          width: "256",
          height: "256",
        }}
        borderRadius="16px"
        className={styles.photo}
      />
    </div>

    <ul className={styles.information}>
      <li>
        <CakeIcon />
        February 2, 2003
      </li>
      <li>
        <EmailIcon />
        <a href="mailto:silash35@gmail.com" title="Silas Henrique's e-mail address">
          silash35@gmail.com
        </a>
      </li>
      <li>
        <PhoneIcon />
        <a href="tel:+5571987529296" title="Phone number of Silas Henrique">
          +55 71 98752-9296
        </a>
      </li>
      <li>
        <MarkerIcon />
        Simões Filho, Bahia, Brazil
      </li>
    </ul>
  </header>
);

export default Header;
