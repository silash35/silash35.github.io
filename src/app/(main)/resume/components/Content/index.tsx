import ResumeBody from "@/components/ResumeBody";

import styles from "./content.module.scss";
import Header from "./Header";

const Content = () => {
  return (
    <article className={styles.content}>
      <Header />

      <ResumeBody className={styles.body} />
    </article>
  );
};

export default Content;
