import Head from "next/head";
import type { ReactElement } from "react";

import Card from "@/components/contact/card";
import Title from "@/components/contact/title";
import Layout from "@/components/layout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Title />
      <Card />
    </>
  );
};

Contact.getLayout = (page: ReactElement) => {
  return <Layout activePage={{ contact: true }}>{page}</Layout>;
};

export default Contact;
