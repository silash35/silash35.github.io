import ResumeBody from "@/components/common/resumeBody";
import Header from "@/components/curriculum/header";

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
