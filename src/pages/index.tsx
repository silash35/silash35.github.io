import Head from "next/head";

import Background from "@/components/common/Background";
import Header from "@/components/common/Header";
import Main from "@/components/index/main";

const Home = () => {
  return (
    <>
      <Head>
        <title>Silas Henrique</title>
      </Head>

      <Header home />
      <Main />
      <Background />
    </>
  );
};

export default Home;
