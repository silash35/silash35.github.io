import Button from "@/components/common/button";
import TextField from "@/components/common/textField";

import styles from "./form.module.scss";

const Form = () => {
  return (
    <form className={styles.form} action="https://formsubmit.co/silash35@gmail.com" method="POST">
      <div>
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
      </div>

      <TextField
        text="Message"
        textareaProps={{
          name: "message",
          "aria-label": "Enter your message",
        }}
      />

      <Button variant="contained" buttonProps={{ type: "submit" }}>
        <img src="/images/icons/black/send.svg" alt="paper plane icon" width="18px" height="18px" />
        Send
      </Button>
    </form>
  );
};

export default Form;
