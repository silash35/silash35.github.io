import { Formations, Jobs, Paragraphs, Publications, Topics } from "@/components/ResumeComponents";
import type { Resume } from "@/utils/resume/types";

import styles from "./body.module.scss";

interface Props {
  resume: Resume;
}

const Body = ({ resume }: Props) => (
  <main className={styles.body}>
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
);

export default Body;
