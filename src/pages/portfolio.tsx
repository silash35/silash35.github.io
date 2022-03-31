import Head from "next/head";
import type { ReactElement } from "react";

import Title from "@/components/common/title";
import Layout from "@/components/layout";
import PortfolioCards from "@/components/portfolio";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Title>Some Things I’ve Built</Title>
      <PortfolioCards />
    </>
  );
};

Portfolio.getLayout = (page: ReactElement) => {
  return <Layout activePage={{ portfolio: true }}>{page}</Layout>;
};

export default Portfolio;
