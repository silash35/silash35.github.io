import ImageModal from "@/components/ImageModal";
import profileImage from "@/images/profile.png";

import styles from "./presentation.module.scss";

const Presentation = () => (
  <article className={styles.presentation}>
    <section>
      <ImageModal
        imageProps={{
          src: profileImage,
          alt: "Photo of silas Henrique Alves Araújo",
          sizes: "282px",
          width: 256,
        }}
        className={styles.image}
      />
    </section>
    <section className={styles.presentationText}>
      <h1>Silas Henrique</h1>
      <p>Free software enthusiast</p>
      <p>Front-end Developer</p>
      <p>C++ Programmer</p>
      <p>Technician in Electromechanics</p>
    </section>
  </article>
);

export default Presentation;
