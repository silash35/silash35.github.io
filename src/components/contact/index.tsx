import styles from "./contactCard.module.scss";
import Form from "./form";
import Social from "./social";

const ContactCard = () => {
  return (
    <article className={styles.card}>
      <section className={styles.grey}>
        <Social />
      </section>
      <section className={styles.orange}>
        <Form />
      </section>
    </article>
  );
};

export default ContactCard;
