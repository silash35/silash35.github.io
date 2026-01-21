import Card from "@/components/Card";
import { Activities, Jobs, Paragraphs, Topics } from "@/components/ResumeComponents";
import resume from "@/utils/resume/en";

import styles from "./body.module.scss";

const Body = () => (
  <section className={styles.body}>
    {resume.map((section, index) => (
      <Card className={styles.card} key={index} variant="filled" asChild>
        <article>
          <h2>{section.title}</h2>

          {section.paragraphs && <Paragraphs paragraphs={section.paragraphs} />}
          {section.topics && <Topics topics={section.topics} />}
          {section.jobs && <Jobs jobs={section.jobs} />}
          {section.activities && <Activities activities={section.activities} />}
        </article>
      </Card>
    ))}
  </section>
);

export default Body;
