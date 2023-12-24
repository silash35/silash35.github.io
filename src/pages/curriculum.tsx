import Head from "next/head";

import Curriculum from "@/components/pages/Curriculum";

const CurriculumPage = () => {
  return (
    <>
      <Head>
        <title>Curriculum</title>

        <link href={`${process.env.SITE_URL}/curriculum`} hrefLang="x-default" rel="alternate" />
        <link href={`${process.env.SITE_URL}/curriculum`} hrefLang="en" rel="alternate" />
        <link href={`${process.env.SITE_URL}/curriculo`} hrefLang="pt-br" rel="alternate" />
      </Head>
      <Curriculum />
    </>
  );
};

export default CurriculumPage;
