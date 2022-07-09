import ScreenDarkener from "@/components/common/ScreenDarkener";

import { ActivePage } from "../activePage";
import Links from "./Links";
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
        show: styles.show,
        hide: styles.hide,
        none: styles.none,
      }}
    >
      <ul className={styles.sideBar}>
        <Links activeClass={styles.active} activePage={activePage} />
      </ul>
    </ScreenDarkener>
  );
}
