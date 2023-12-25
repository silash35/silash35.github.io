import { Metadata } from "next";

import Title from "@/components/common/Title";
import PortfolioCards from "@/components/pages/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
};

const Portfolio = () => (
  <>
    <Title>Some Things I’ve Built</Title>
    <PortfolioCards />
  </>
);

export default Portfolio;
