"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Button from "@/components/Button";
import Card from "@/components/Card";

import styles from "./dialog.module.scss";

const Dialog = () => {
  const ref = useRef<HTMLElement>(null);

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
      nodeRef={ref}
      timeout={300}
      appear
      unmountOnExit
    >
      <Card className={styles.dialog} variant="outlined" asChild>
        <article ref={ref}>
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
      </Card>
    </CSSTransition>
  );
};

export default Dialog;
