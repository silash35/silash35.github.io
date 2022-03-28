import ImageModal from "@/components/common/imageModal";
import ResumeBody from "@/components/common/resumeBody";

import styles from "./content.module.scss";

const Content = () => {
  return (
    <article className={styles.content}>
      <header>
        <h1>Silas Henrique Alves Araújo</h1>
        <div className={styles.photo}>
          <ImageModal
            borderRadius="25%"
            imageProps={{
              src: "/images/profile.webp",
              alt: "Photo of silas Henrique Alves Araújo",
              width: "256",
              height: "256",
            }}
          />
        </div>
        <ul>
          <li>
            <img src="/images/icons/white/cake-variant.svg" alt="cake Icon" />
            February 2, 2003
          </li>
          <li>
            <img src="/images/icons/white/email.svg" alt="email Icon" />
            <a href="mailto:silash35@gmail.com" title="Silas Henrique's e-mail address">
              silash35@gmail.com
            </a>
          </li>
          <li>
            <img src="/images/icons/white/phone.svg" alt="phone Icon" />
            <a href="tel:+5571987529296" title="Phone number of Silas Henrique">
              +55 71 98752-9296
            </a>
          </li>
          <li>
            <img src="/images/icons/white/map-marker.svg" alt="local Icon" />
            Simões Filho, Bahia, Brazil
          </li>
        </ul>
        <div className={styles.fill}></div>
      </header>

      <ResumeBody />
    </article>
  );
};

export default Content;
