"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Button from "@/components/Button";

import styles from "./dialog.module.scss";

const Dialog = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const goToCurriculum = () => {
    const userLang = navigator.languages[0] || navigator.language;

    if (userLang[0] == "p" && userLang[1] == "t") {
      router.push("curriculo");
    } else {
      router.push("curriculum");
    }
  };

  return (
    <CSSTransition
      classNames={{
        enterActive: styles.show,
        enterDone: styles.show,
      }}
      in={isOpen}
      timeout={300}
      appear
      unmountOnExit
    >
      <article className={styles.dialog} ref={ref}>
        <h2>Looking for a curriculum?</h2>
        <p>
          This is a resume, if you are looking for an (almost) unstyled version, go to the
          curriculum page.
        </p>
        <div>
          <Button onClick={goToCurriculum} variant="text">
            Check curriculum
          </Button>
          <Button onClick={() => setIsOpen(false)} variant="text">
            Maybe later
          </Button>
        </div>
      </article>
    </CSSTransition>
  );
};

export default Dialog;
