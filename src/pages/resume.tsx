import Head from "next/head";
import type { ReactElement } from "react";

import Layout from "@/components/Layout";
import Content from "@/components/pages/resume/Content";
import Dialog from "@/components/pages/resume/Dialog";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>

      <Content />
      <Dialog />
    </>
  );
};

Resume.getLayout = (page: ReactElement) => {
  return <Layout activePage={{ resume: true }}>{page}</Layout>;
};

export default Resume;
