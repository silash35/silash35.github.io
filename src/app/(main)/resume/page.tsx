import { Metadata } from "next";

import Dialog from "./_components/Dialog";
import Resume from "./_components/Resume";

export const metadata: Metadata = {
  title: "Resume",
};

const ResumePage = () => (
  <>
    <Resume />
    <Dialog />
  </>
);

export default ResumePage;
