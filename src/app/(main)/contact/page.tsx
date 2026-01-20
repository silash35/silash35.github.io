import { Metadata } from "next";

import Title from "@/components/Title";

import ContactCard from "./_components/contactCard";
import Social from "./_components/social";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => (
  <>
    <Title>Want to get in touch?</Title>
    <Social />
    <ContactCard />
  </>
);

export default Contact;
