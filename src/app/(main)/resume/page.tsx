import { Metadata } from "next";

import Content from "@/components/pages/resume/Content";
import Dialog from "@/components/pages/resume/Dialog";

export const metadata: Metadata = {
  title: "Resume",
};

const Resume = () => (
  <>
    <Content />
    <Dialog />
  </>
);

export default Resume;
