import type { Resume } from "@/components/resume/type";
import { Activities, Jobs, Paragraphs, Topics } from "@/components/resume/utils";

import styles from "./body.module.scss";

interface Props {
  resume: Resume;
}

const Body = ({ resume }: Props) => (
  <main className={styles.body}>
    {resume.map((section, index) => (
      <article key={index}>
        <h2>{section.title}</h2>

        <Paragraphs paragraphs={section.paragraphs} />
        <Topics topics={section.topics} />
        <Jobs jobs={section.jobs} />
        <Activities activities={section.activities} />
      </article>
    ))}
  </main>
);

export default Body;
