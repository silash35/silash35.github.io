import Header from "./Header";
import Main from "./Main";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
