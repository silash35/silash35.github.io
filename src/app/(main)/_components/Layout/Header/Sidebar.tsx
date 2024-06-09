import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Links from "./Links";
import styles from "./sidebar.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const ref = useRef<HTMLUListElement>(null);

  return (
    <CSSTransition
      classNames={{
        enter: styles.open,
        enterDone: styles.open,
      }}
      in={isOpen}
      nodeRef={ref}
      timeout={300}
      unmountOnExit
    >
      <ul className={styles.sideBar} onClick={setIsOpen} ref={ref}>
        <Links activeClass={styles.active} />
      </ul>
    </CSSTransition>
  );
};

export default Sidebar;
