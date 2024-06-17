import Card from "@/components/Card";
import resume from "@/components/resume/resumes/en.json";
import { Activities, Jobs, Paragraphs, Topics } from "@/components/resume/utils";

import styles from "./body.module.scss";

const Body = () => (
  <section className={styles.body}>
    {resume.map((section, index) => (
      <Card className={styles.card} key={index} variant="filled" asChild>
        <article>
          <h2>{section.title}</h2>

          <Paragraphs paragraphs={section.paragraphs} />
          <Topics topics={section.topics} />
          <Jobs jobs={section.jobs} />
          <Activities activities={section.activities} />
        </article>
      </Card>
    ))}
  </section>
);

export default Body;
