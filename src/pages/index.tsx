import Head from "next/head";

import Layout from "@/components/layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Silas Henrique</title>
      </Head>

      <Layout activePage={{ home: true }}>Olá Olá Olá</Layout>
    </>
  );
};

export default Home;
