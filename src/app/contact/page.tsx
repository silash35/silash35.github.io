import { Metadata } from "next";

import Title from "@/components/common/Title";
import ContactCard from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => (
  <>
    <Title>Where to find me?</Title>
    <ContactCard />
  </>
);

export default Contact;
