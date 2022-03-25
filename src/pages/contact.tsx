import Head from "next/head";

import Card from "@/components/contact/card";
import Title from "@/components/contact/title";
import Layout from "@/components/layout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Layout activePage={{ contact: true }}>
        <Title />
        <Card />
      </Layout>
    </>
  );
};

export default Contact;
