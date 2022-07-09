import Head from "next/head";
import type { ReactElement } from "react";

import Title from "@/components/common/Title";
import Layout from "@/components/Layout";
import ContactCard from "@/components/pages/Contact";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Title>Where to find me?</Title>
      <ContactCard />
    </>
  );
};

Contact.getLayout = (page: ReactElement) => {
  return <Layout activePage={{ contact: true }}>{page}</Layout>;
};

export default Contact;
