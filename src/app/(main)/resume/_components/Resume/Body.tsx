import Card from "@/components/Card";
import { Formations, Jobs, Paragraphs, Publications, Topics } from "@/components/ResumeComponents";
import resume from "@/utils/resume/en";

import styles from "./body.module.scss";

const Body = () => (
  <section className={styles.body}>
    {resume.map((section, index) => (
      <Card className={styles.card} key={index} variant="filled" asChild>
        <article>
          <h2>{section.title}</h2>

          {section.jobs && <Jobs jobs={section.jobs} />}
          {section.topics && <Topics topics={section.topics} />}
          {section.formations && <Formations formations={section.formations} />}
          {section.paragraphs && <Paragraphs paragraphs={section.paragraphs} />}
          {section.publications && <Publications publications={section.publications} />}
        </article>
      </Card>
    ))}
  </section>
);

export default Body;
