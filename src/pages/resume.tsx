import Head from "next/head";
import type { ReactElement } from "react";

import Layout from "@/components/layout";
import Content from "@/components/resume/content";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>

      <Content />
    </>
  );
};

Resume.getLayout = (page: ReactElement) => {
  return <Layout activePage={{ resume: true }}>{page}</Layout>;
};

export default Resume;
