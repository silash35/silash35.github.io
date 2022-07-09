import Head from "next/head";

import Curriculum from "@/components/pages/Curriculum";

const CurriculumPage = () => {
  return (
    <>
      <Head>
        <title>Curriculum</title>

        <link rel="alternate" href={`${process.env.SITE_URL}/curriculum`} hrefLang="x-default" />
        <link rel="alternate" href={`${process.env.SITE_URL}/curriculum`} hrefLang="en" />
        <link rel="alternate" href={`${process.env.SITE_URL}/curriculo`} hrefLang="pt-br" />
      </Head>
      <Curriculum />
    </>
  );
};

export default CurriculumPage;
