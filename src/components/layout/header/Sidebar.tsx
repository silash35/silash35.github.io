import { CSSTransition } from "react-transition-group";

import { ActivePage } from "../activePage";
import Links from "./links";
import styles from "./sidebar.module.scss";

interface Props {
  activePage: ActivePage;

  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen, activePage }: Props) {
  return (
    <CSSTransition
      in={open}
      timeout={300}
      unmountOnExit
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
    >
      <div>
        <ul className={styles.sideBar}>
          <Links activeClass={styles.active} activePage={activePage} />
        </ul>
        <button
          aria-label="Close Menu"
          className={styles.screenDarkener}
          onClick={() => setOpen(false)}
        />
      </div>
    </CSSTransition>
  );
}
