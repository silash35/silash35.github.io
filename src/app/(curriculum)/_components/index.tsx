import resumeEn from "@/components/resume/resumes/en.json";
import resumePt from "@/components/resume/resumes/pt.json";

import Body from "./Body";
import styles from "./curriculum.module.scss";
import Header from "./Header";

interface Props {
  locale?: string;
}

const Curriculum = ({ locale }: Props) => {
  const resume = locale === "pt" ? resumePt : resumeEn;

  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <Header locale={locale} />
        <Body resume={resume} />
      </div>
    </div>
  );
};

export default Curriculum;
