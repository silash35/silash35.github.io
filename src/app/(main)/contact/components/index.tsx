import styles from "./contactCard.module.scss";
import Form from "./Form";
import Social from "./Social";

const ContactCard = () => (
  <article className={styles.card}>
    <section className={styles.grey}>
      <Social />
    </section>
    <section className={styles.orange}>
      <Form />
    </section>
  </article>
);

export default ContactCard;
