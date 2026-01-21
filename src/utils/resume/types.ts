export interface LinkText {
  text: string;
  href: string;
  title?: string;
  outsideText?: string;
}

export type Paragraph = string;

export type Topic = string | LinkText;

export interface Job {
  company: string | LinkText;
  positions: string[];
  activities: string[];
}

interface Activity {
  name: string | LinkText;
  period: string;
  tasks?: string[];
}

export interface Formation {
  name: string | LinkText;
  place: string;
  activities?: Activity[];
}

export interface Publication {
  workTitle: string | LinkText;
  type: string;
  venue: string | LinkText;
  authors: string[];
}

export interface ResumeSection {
  title: string;
  jobs?: Job[];
  topics?: Topic[];
  paragraphs?: Paragraph[];
  formations?: Formation[];
  publications?: Publication[];
}

export type Resume = ResumeSection[];
