import TextField from "@/components/common/textField";

import styles from "./form.module.scss";

const Form = () => {
  return (
    <section className={styles.form}>
      <form action="https://formsubmit.co/silash35@gmail.com" method="POST">
        <TextField
          text="Name"
          inputProps={{
            name: "name",
            "aria-label": "Enter your name",
            required: true,
          }}
        />

        <TextField
          text="Email"
          inputProps={{
            type: "email",
            name: "email",
            "aria-label": "Enter your email address",
            required: true,
          }}
        />

        <TextField
          text="Message"
          textareaProps={{
            name: "message",
            "aria-label": "Enter your message",
          }}
        />

        <button type="submit">
          <img src="/images/icons/black/send.svg" alt="paper plane icon" />
          Send
        </button>
      </form>
    </section>
  );
};

export default Form;
