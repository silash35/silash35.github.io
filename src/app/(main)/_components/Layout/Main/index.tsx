import styles from "./main.module.scss";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => <main className={styles.main}>{children}</main>;

export default Main;
