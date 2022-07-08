import ImageModal from "@/components/common/ImageModal";

import styles from "./presentation.module.scss";

const Presentation = () => {
  return (
    <article className={styles.presentation}>
      <section className="presentationPhoto imageModal">
        <ImageModal
          borderRadius="50%"
          imageProps={{
            src: "/images/profile.webp",
            alt: "Photo of silas Henrique Alves Araújo",
            width: "256",
            height: "256",
          }}
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
};

export default Presentation;
