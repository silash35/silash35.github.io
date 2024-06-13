import Link from "next/link";

import resume from "@/others/resume/en.json";

import styles from "./body.module.scss";

interface BodyLinkProps {
  href: string;
  text: string;
  title?: string;
  outsideText?: string;
}

const BodyLink = ({ href, text, title, outsideText }: BodyLinkProps) => (
  <>
    <Link href={href} rel="noopener noreferrer" target="_blank" title={title}>
      {text}
    </Link>
    {outsideText ? <> {outsideText}</> : null}
  </>
);

const Body = () => (
  <section className={styles.body}>
    {resume.map((section, index) => (
      <article key={index}>
        <h2>{section.title}</h2>

        {section.paragraphs ? (
          <div>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {section.topics ? (
          <ul>
            {section.topics.map((topic, index) => (
              <li key={index}>
                {typeof topic === "string" ? <p>{topic}</p> : <BodyLink {...topic} />}
              </li>
            ))}
          </ul>
        ) : null}

        {section.jobs
          ? section.jobs.map((job, index) => (
              <section key={index}>
                <h3>
                  {typeof job.company === "string" ? job.company : <BodyLink {...job.company} />}
                </h3>
                {job.positions.map((position, index) => (
                  <small key={index}>{position}</small>
                ))}

                <ul>
                  {job.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </section>
            ))
          : null}

        {section.activities
          ? section.activities.map((activity, index) => (
              <section key={index}>
                <h3>
                  {typeof activity.name === "string" ? (
                    activity.name
                  ) : (
                    <BodyLink {...activity.name} />
                  )}
                </h3>
                <small key={index}>{activity.period}</small>
                <ul>
                  {activity.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </section>
            ))
          : null}
      </article>
    ))}
  </section>
);

export default Body;
