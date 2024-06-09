import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MouseTrailer from "./MouseTrailer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <MouseTrailer />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
