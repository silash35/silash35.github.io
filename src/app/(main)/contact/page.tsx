import { Metadata } from "next";

import Title from "@/components/Title";

import ContactCard from "./components";

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
