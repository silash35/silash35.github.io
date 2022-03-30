import Head from "next/head";

import Curriculum from "@/components/curriculum";

const Curriculo = () => {
  return (
    <>
      <Head>
        <title>Currículo</title>

        <link rel="alternate" href="https://silash35.github.io/curriculum" hrefLang="x-default" />
        <link rel="alternate" href="https://silash35.github.io/curriculum" hrefLang="en" />
        <link rel="alternate" href="https://silash35.github.io/curriculo" hrefLang="pt-br" />
      </Head>
      <Curriculum locale="pt" />
    </>
  );
};

export default Curriculo;
