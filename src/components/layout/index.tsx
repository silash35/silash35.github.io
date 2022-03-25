import { ActivePage } from "./activePage";
import Background from "./background";
import Header from "./header";
import Main from "./main";

interface Props {
  children: React.ReactNode;
  activePage: ActivePage;
}

const Layout = ({ children, activePage }: Props) => {
  return (
    <>
      <Header activePage={activePage} />
      <Main>{children}</Main>
      <Background />
    </>
  );
};

export default Layout;
