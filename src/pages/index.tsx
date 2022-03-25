import Head from "next/head";

import Presentation from "@/components/home/presentation";
import Layout from "@/components/layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Silas Henrique</title>
      </Head>

      <Layout activePage={{ home: true }}>
        <Presentation />
      </Layout>
    </>
  );
};

export default Home;
