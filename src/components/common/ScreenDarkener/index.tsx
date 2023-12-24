import { HTMLAttributes, useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLButtonElement>(null);

  const [transitionStyle, setTransitionStyle] = useState(
    `${styles.none} ${transitionClassNames?.none}`,
  );

  const animeIn = () => {
    if (ref.current !== null) {
      ref.current.className = `${styles.hide} ${transitionClassNames?.hide}`;
    }

    setTransitionStyle(`${styles.show} ${transitionClassNames?.show}`);
  };

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
      className={`${styles.screenDarkener} ${transitionStyle}`}
      onClick={() => setIsOpen(false)}
      {...props.buttonProps}
      ref={ref}
    >
      {props.children}
    </button>
  );
};

export default ScreenDarkener;
