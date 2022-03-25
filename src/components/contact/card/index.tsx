import styles from "./card.module.scss";
import Form from "./form";
import Social from "./social";

const Card = () => {
  return (
    <article className={styles.card}>
      <Social />
      <Form />
    </article>
  );
};

export default Card;
