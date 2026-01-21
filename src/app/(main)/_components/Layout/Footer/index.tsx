"use client";
import { useEffect, useState } from "react";

import PublicDomainIcon from "@/components/icons/PublicDomain";
import getRandomSentence from "@/utils/getRandomSentences";

import styles from "./footer.module.scss";

const Footer = () => {
  const [sentence, setSentence] = useState("Checking notes...");
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSentence(getRandomSentence());
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <p>
        <PublicDomainIcon />
        {year} Silas Henrique. No rights reserved.
      </p>

      <p>{sentence}</p>
    </footer>
  );
};

export default Footer;
