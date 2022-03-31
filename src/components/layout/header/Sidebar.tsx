import ScreenDarkener from "@/components/common/screenDarkener";

import { ActivePage } from "../activePage";
import Links from "./links";
import styles from "./sidebar.module.scss";

interface Props {
  activePage: ActivePage;

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen, activePage }: Props) {
  return (
    <ScreenDarkener
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      buttonProps={{ "aria-label": "Close Menu" }}
      transitionClassNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
    >
      <ul className={styles.sideBar}>
        <Links activeClass={styles.active} activePage={activePage} />
      </ul>
    </ScreenDarkener>
  );
}
