import { Formations, Jobs, Paragraphs, Publications, Topics } from "@/components/ResumeComponents";
import resumeEn from "@/utils/resume/en";
import resumePt from "@/utils/resume/pt";

import styles from "./curriculum.module.scss";
import en from "./locale/en.json";
import pt from "./locale/pt.json";

interface Props {
  locale?: string;
}

const Curriculum = ({ locale }: Props) => {
  const resume = locale === "pt" ? resumePt : resumeEn;
  const l = locale === "pt" ? pt : en;

  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <header>
          <h1>Silas Henrique Alves Araújo</h1>

          <p>{l.dateOfBirth}</p>

          <p>
            {l.email}:{" "}
            <a href="mailto:silash35@gmail.com" title={l.emailTitle}>
              silash35@gmail.com
            </a>
          </p>
          <p>
            {l.phone}:{" "}
            <a href="tel:+5571987529296" title={l.phoneTitle}>
              +55 71 98752-9296
            </a>
          </p>
          <p>{l.address}</p>
        </header>
        <main>
          {resume.map((section, index) => (
            <article key={index}>
              <h2>{section.title}</h2>

              {section.jobs && <Jobs jobs={section.jobs} />}
              {section.topics && <Topics topics={section.topics} />}
              {section.formations && <Formations formations={section.formations} />}
              {section.paragraphs && <Paragraphs paragraphs={section.paragraphs} />}
              {section.publications && <Publications publications={section.publications} />}
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Curriculum;
