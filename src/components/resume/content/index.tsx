import ResumeBody from "@/components/common/resumeBody";

import styles from "./content.module.scss";
import Header from "./header";

const Content = () => {
  return (
    <article className={styles.content}>
      <Header />

      <ResumeBody className={styles.body} />
    </article>
  );
};

export default Content;
