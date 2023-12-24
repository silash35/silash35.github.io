import { ActivePage } from "./activePage";
import Background from "./Background";
import Header from "./Header";
import Main from "./Main";

interface Props {
  children: React.ReactNode;
  activePage: ActivePage;
}

const Layout = ({ children, activePage }: Props) => (
  <>
    <Header activePage={activePage} />
    <Main>{children}</Main>
    <Background />
  </>
);

export default Layout;
