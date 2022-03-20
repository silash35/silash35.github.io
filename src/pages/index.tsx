import Head from "next/head";

import Background from "@/components/common/Background";
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
      <Background />
    </>
  );
};

export default Home;
