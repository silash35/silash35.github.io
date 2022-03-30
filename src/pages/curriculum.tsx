import Head from "next/head";

import Curriculum from "@/components/curriculum";

const CurriculumPage = () => {
  return (
    <>
      <Head>
        <title>Curriculum</title>

        <link rel="alternate" href="https://silash35.github.io/curriculum" hrefLang="x-default" />
        <link rel="alternate" href="https://silash35.github.io/curriculum" hrefLang="en" />
        <link rel="alternate" href="https://silash35.github.io/curriculo" hrefLang="pt-br" />
      </Head>
      <Curriculum />
    </>
  );
};

export default CurriculumPage;
