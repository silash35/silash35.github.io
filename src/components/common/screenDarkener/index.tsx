import type { HTMLAttributes } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./screenDarkener.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  buttonProps: HTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;

  transitionClassNames?: {
    enter: string;
    enterActive: string;
    enterDone: string;
    exit: string;
    exitActive: string;
  };
}

const ScreenDarkener = ({ isOpen, setIsOpen, transitionClassNames, ...props }: Props) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      unmountOnExit
      classNames={{
        enter: `${styles.enter} ${transitionClassNames?.enter}`,
        enterActive: `${styles.enterActive} ${transitionClassNames?.enterActive}`,
        enterDone: `${styles.enterDone} ${transitionClassNames?.enterDone}`,
        exit: `${styles.exit} ${transitionClassNames?.exit}`,
        exitActive: `${styles.exitActive} ${transitionClassNames?.exitActive}`,
      }}
    >
      <button
        onClick={() => setIsOpen(false)}
        className={styles.screenDarkener}
        {...props.buttonProps}
      >
        {props.children}
      </button>
    </CSSTransition>
  );
};

export default ScreenDarkener;
