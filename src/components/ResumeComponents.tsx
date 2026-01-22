import Link from "@/components/Link";
import type { Formation, Job, LinkText, Paragraph, Publication, Topic } from "@/utils/resume/types";

const BodyLink = ({ href, text, title, outsideText }: LinkText) => (
  <>
    <Link href={href} title={title}>
      {text}
    </Link>
    {outsideText ? <> {outsideText}</> : null}
  </>
);

const TextOrLink = ({ content }: { content: string | LinkText }) =>
  typeof content === "string" ? content : <BodyLink {...content} />;

export const Jobs = ({ jobs }: { jobs: Job[] }) => {
  return jobs.map((job, index) => (
    <section key={index}>
      <h3>
        <TextOrLink content={job.company} />
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
  ));
};

export const Topics = ({ topics }: { topics: Topic[] }) => (
  <ul>
    {topics.map((topic, index) => (
      <li key={index}>
        <TextOrLink content={topic} />
      </li>
    ))}
  </ul>
);

export const Paragraphs = ({ paragraphs }: { paragraphs: Paragraph[] }) => (
  <div>
    {paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
);

export const Formations = ({ formations }: { formations: Formation[] }) => {
  return formations.map((formation, index) => (
    <section key={index}>
      <h3>
        <TextOrLink content={formation.name} />
      </h3>
      <small key={index}>{formation.place}</small>
      <ul>
        {formation.activities?.map((activity, index) => (
          <li key={index}>
            <TextOrLink content={activity.name} />
            <small>{activity.period}</small>
          </li>
        ))}
      </ul>
    </section>
  ));
};

export const Publications = ({ publications }: { publications: Publication[] }) => (
  <ul>
    {publications.map((publication, index) => (
      <li key={index}>
        <TextOrLink content={publication.title} />
        <small key={index}>
          {publication.type} - <TextOrLink content={publication.venue} />
        </small>
        <small>Autores: {publication.authors.join("; ")}</small>
      </li>
    ))}
  </ul>
);
