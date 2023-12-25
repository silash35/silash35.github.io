"use client";

import { HTMLAttributes, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./screenDarkener.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  buttonProps: HTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;

  showClassName?: string;
}

const ScreenDarkener = ({ isOpen, setIsOpen, showClassName, ...props }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <CSSTransition
      classNames={{
        enterActive: `${styles.show} ${showClassName}`,
        enterDone: `${styles.show} ${showClassName}`,
      }}
      in={isOpen}
      nodeRef={ref}
      timeout={300}
      unmountOnExit
    >
      <button
        onClick={() => setIsOpen(false)}
        {...props.buttonProps}
        className={styles.screenDarkener}
        ref={ref}
      >
        {props.children}
      </button>
    </CSSTransition>
  );
};

export default ScreenDarkener;
