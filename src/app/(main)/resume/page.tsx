import { Metadata } from "next";

import Content from "./components/Content";
import Dialog from "./components/Dialog";

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
