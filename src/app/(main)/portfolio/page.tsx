import { Metadata } from "next";

import Title from "@/components/Title";

import PortfolioCards from "./components";

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
