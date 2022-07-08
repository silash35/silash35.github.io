import { HTMLAttributes, useEffect, useState } from "react";

import styles from "./screenDarkener.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  buttonProps: HTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;

  transitionClassNames?: {
    show: string;
    hide: string;
    none: string;
  };
}

const ScreenDarkener = ({ isOpen, setIsOpen, transitionClassNames, ...props }: Props) => {
  const [isAnimeIn, setIsAnimeIn] = useState(false);
  const [transitionStyle, setTransitionStyle] = useState(
    `${styles.none} ${transitionClassNames?.none}`
  );

  const animeIn = () => {
    setTransitionStyle(`${styles.hide} ${transitionClassNames?.hide}`);
    setIsAnimeIn(true);
  };

  useEffect(() => {
    if (isAnimeIn) {
      setTransitionStyle(`${styles.show} ${transitionClassNames?.show}`);
      setIsAnimeIn(false);
    }
  }, [isAnimeIn]);

  const animeOut = () => {
    setTransitionStyle(`${styles.hide} ${transitionClassNames?.hide}`);
    setTimeout(() => {
      setTransitionStyle(`${styles.none} ${transitionClassNames?.none}`);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      animeIn();
    } else {
      animeOut();
    }
  }, [isOpen]);

  return (
    <button
      onClick={() => setIsOpen(false)}
      className={`${styles.screenDarkener} ${transitionStyle}`}
      {...props.buttonProps}
    >
      {props.children}
    </button>
  );
};

export default ScreenDarkener;
