import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";

import styles from "./form.module.scss";

const Form = () => (
  <form action="https://formsubmit.co/silash35@gmail.com" className={styles.form} method="POST">
    <div>
      <TextField
        inputProps={{
          name: "name",
          "aria-label": "Enter your name",
          required: true,
        }}
        text="Name"
      />
      <TextField
        inputProps={{
          type: "email",
          name: "email",
          "aria-label": "Enter your email address",
          required: true,
        }}
        text="Email"
      />
    </div>

    <TextField
      textareaProps={{
        name: "message",
        "aria-label": "Enter your message",
      }}
      text="Message"
    />

    <Button buttonProps={{ type: "submit" }} variant="contained">
      <img alt="paper plane icon" height="18px" src="/images/icons/black/send.svg" width="18px" />
      Send
    </Button>
  </form>
);

export default Form;
