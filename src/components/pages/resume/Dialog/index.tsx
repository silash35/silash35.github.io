import { useRouter } from "next/router";
import { useRef, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import Button from "@/components/common/Button";

import styles from "./dialog.module.scss";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  const nodeRef = useRef(null);
  const router = useRouter();

  const goToCurriculum = () => {
    const userLang = navigator.languages[0] || navigator.language;

    if (userLang[0] == "p" && userLang[1] == "t") {
      router.push("curriculo");
    } else {
      router.push("curriculum");
    }
  };

  const closeDialog = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      nodeRef={nodeRef}
      unmountOnExit
      classNames={{
        enterDone: styles.enterDone,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
    >
      <article className={styles.dialog} ref={nodeRef}>
        <h2>Looking for a curriculum?</h2>
        <p>
          This is a resume, if you are looking for an (almost) unstyled version go to the Curriculum
        </p>
        <div>
          <Button variant="text" onClick={goToCurriculum}>
            Go to curriculum
          </Button>
          <Button variant="text" onClick={closeDialog}>
            No
          </Button>
        </div>
      </article>
    </CSSTransition>
  );
};

export default Dialog;
