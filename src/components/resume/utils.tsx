interface BodyLinkProps {
  href: string;
  text: string;
  title?: string;
  outsideText?: string;
}

const BodyLink = ({ href, text, title, outsideText }: BodyLinkProps) => (
  <>
    <Link href={href} title={title}>
      {text}
    </Link>
    {outsideText ? <> {outsideText}</> : null}
  </>
);

import Link from "@/components/Link";

import type { Resume } from "./type";

interface ParagraphsProps {
  paragraphs: Resume[number]["paragraphs"];
}

export const Paragraphs = ({ paragraphs }: ParagraphsProps) => {
  if (!paragraphs) return null;
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

interface TopicsProps {
  topics: Resume[number]["topics"];
}

export const Topics = ({ topics }: TopicsProps) => {
  if (!topics) return null;
  return (
    <ul>
      {topics.map((topic, index) => (
        <li key={index}>{typeof topic === "string" ? <p>{topic}</p> : <BodyLink {...topic} />}</li>
      ))}
    </ul>
  );
};

interface JobsProps {
  jobs: Resume[number]["jobs"];
}

export const Jobs = ({ jobs }: JobsProps) => {
  if (!jobs) return null;

  return jobs.map((job, index) => (
    <section key={index}>
      <h3>{typeof job.company === "string" ? job.company : <BodyLink {...job.company} />}</h3>
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

interface ActivitiesProps {
  activities: Resume[number]["activities"];
}

export const Activities = ({ activities }: ActivitiesProps) => {
  if (!activities) return null;
  return activities.map((activity, index) => (
    <section key={index}>
      <h3>{typeof activity.name === "string" ? activity.name : <BodyLink {...activity.name} />}</h3>
      <small key={index}>{activity.period}</small>
      <ul>
        {activity.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  ));
};
