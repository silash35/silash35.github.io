import { useRouter } from "next/router";
import { useState } from "react";

import Button from "@/components/common/Button";

import styles from "./dialog.module.scss";

const Dialog = () => {
  const [transitionStyle, setTransitionStyle] = useState(styles.show);
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
      setTransitionStyle(styles.hide);
      setTimeout(() => {
        setTransitionStyle(styles.none);
      }, 300);
    }, 300);
  };

  return (
    <article className={`${styles.dialog} ${transitionStyle}`}>
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
  );
};

export default Dialog;
