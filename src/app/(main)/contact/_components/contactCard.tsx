import Button from "@/components/Button";
import Card from "@/components/Card";
import SendIcon from "@/components/icons/Send";
import { Input, TextArea } from "@/components/TextFields";

import styles from "./contactCard.module.scss";

const ContactCard = () => (
  <Card variant="filled" asChild>
    <article className={styles.card}>
      <h2>Get in Touch</h2>
      <Form />
    </article>
  </Card>
);

const Form = () => (
  <form action="https://formsubmit.co/silash35@gmail.com" method="POST">
    <Input
      aria-label="Enter your name"
      label="Name"
      name="name"
      placeholder="e.g. John Smith"
      required={true}
    />
    <Input
      aria-label="Enter your email address"
      label="Email"
      name="email"
      placeholder="e.g. john@company.com"
      required={true}
      type="email"
    />
    <TextArea
      aria-label="Enter your message"
      label="Message"
      name="message"
      placeholder="How can I help you?"
    />

    <Button type="submit" variant="contained">
      <SendIcon />
      Send Message
    </Button>
  </form>
);

export default ContactCard;
