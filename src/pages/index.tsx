import Head from "next/head";

import Header from "@/components/common/Header";
import Main from "@/components/index/main";

const Home = () => {
  return (
    <>
      <Head>
        <title>ALIS</title>
      </Head>

      <Header />
      <Main />
    </>
  );
};

export default Home;
