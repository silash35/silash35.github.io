import Title from "@/components/Title";

import ContactCard from "./ContactCard";
import styles from "./contactPage.module.scss";
import Social from "./Social";

const ContactPage = () => (
  <div className={styles.container}>
    <div className={styles.sideContent}>
      <Title className={styles.title}>Want to get in touch?</Title>
      <Social />
    </div>
    <ContactCard />
  </div>
);

export default ContactPage;
