import Body from "./Body";
import Header from "./Header";
import styles from "./resume.module.scss";

const Content = () => (
  <article className={styles.resume}>
    <Header />
    <Body />
  </article>
);

export default Content;
