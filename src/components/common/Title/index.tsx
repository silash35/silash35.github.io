import styles from "./title.module.scss";

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
