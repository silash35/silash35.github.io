import { Metadata } from "next";

import Content from "./_components/Content";
import Dialog from "./_components/Dialog";

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
