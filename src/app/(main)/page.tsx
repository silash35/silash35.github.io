import { Metadata } from "next";

import Presentation from "./components/Presentation";

export const metadata: Metadata = {
  title: "Silas Henrique",
};

const Home = () => <Presentation />;

export default Home;
