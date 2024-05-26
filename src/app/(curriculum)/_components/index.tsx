import ResumeBody from "@/components/ResumeBody";

import styles from "./curriculum.module.scss";
import Header from "./Header";

interface Props {
  locale?: string;
}

const Curriculum = ({ locale }: Props) => (
  <div className={styles.background}>
    <div className={styles.page}>
      <Header locale={locale} />
      <main>
        <ResumeBody locale={locale} />
      </main>
    </div>
  </div>
);

export default Curriculum;
