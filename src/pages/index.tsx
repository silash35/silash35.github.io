import Head from "next/head";
import type { ReactElement } from "react";

import Presentation from "@/components/home/presentation";
import Layout from "@/components/layout";

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
