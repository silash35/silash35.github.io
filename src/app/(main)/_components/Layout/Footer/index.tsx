"use client";
import { useEffect, useState } from "react";

import PublicDomainIcon from "@/components/icons/PublicDomain";

import styles from "./footer.module.scss";

/* spell-checker: disable */
const sentences = [
  // "Wibbly wobbly, timey wimey",
  "Allons-y!",
  "Geronimo!",
  "We're all stories in the end. Just make it a good one.",
  "Do or do not. There is no try.",
  "May the Force be with you",
  // "So Long, and Thanks for All the Fish",
  "Don't Panic!",
  "42",
  // "It's dangerous to go alone! Take this.",
  "With great power comes great responsibility",
  "Even the smallest person can change the course of the future",
  "sudo make me a sandwich",
  "Talk is cheap. Show me the code.",
];
/* spell-checker: enable */

const getRandomSentence = () => sentences[Math.floor(Math.random() * sentences.length)];

const Footer = () => {
  const [sentence, setSentence] = useState("Checking notes...");

  useEffect(() => {
    setSentence(getRandomSentence());
  }, []);

  return (
    <footer className={styles.footer}>
      <p suppressHydrationWarning>
        <PublicDomainIcon />
        {new Date().getFullYear()} Silas Henrique. No rights reserved.
      </p>

      <p>{sentence}</p>
    </footer>
  );
};

export default Footer;
