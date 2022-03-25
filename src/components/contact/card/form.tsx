import styles from "./form.module.scss";

const Form = () => {
  return (
    <section className={styles.form}>
      <form action="https://formsubmit.co/silash35@gmail.com" method="POST">
        <label>
          Name
          <input name="name" aria-label="Enter your name" required />
        </label>

        <label>
          E-mail
          <input type="email" name="email" aria-label="Enter your email address" required />
        </label>

        <label>
          Message
          <textarea name="message" aria-label="Enter your message" />
        </label>

        <button type="submit">
          <img src="/images/icons/black/send.svg" alt="paper plane icon" />
          Send
        </button>
      </form>
    </section>
  );
};

export default Form;
