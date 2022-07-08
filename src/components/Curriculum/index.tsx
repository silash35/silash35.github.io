import ResumeBody from "@/components/common/ResumeBody";
import Header from "@/components/Curriculum/Header";

import styles from "./curriculum.module.scss";

interface Props {
  locale?: string;
}

const Curriculum = ({ locale }: Props) => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.page}>
          <Header locale={locale} />
          <main>
            <ResumeBody locale={locale} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
