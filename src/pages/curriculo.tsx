import Head from "next/head";

import Curriculum from "@/components/curriculum";

const Curriculo = () => {
  return (
    <>
      <Head>
        <title>Currículo</title>

        <link rel="alternate" href={`${process.env.SITE_URL}/curriculum`} hrefLang="x-default" />
        <link rel="alternate" href={`${process.env.SITE_URL}/curriculum`} hrefLang="en" />
        <link rel="alternate" href={`${process.env.SITE_URL}/curriculo`} hrefLang="pt-br" />
      </Head>
      <Curriculum locale="pt" />
    </>
  );
};

export default Curriculo;
