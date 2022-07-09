import Head from "next/head";
import type { ReactElement } from "react";

import Layout from "@/components/Layout";
import Presentation from "@/components/pages/home/Presentation";

const Home = () => {
  return (
    <>
      <Head>
        <title>Silas Henrique</title>
      </Head>

      <Presentation />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout activePage={{ home: true }}>{page}</Layout>;
};

export default Home;
