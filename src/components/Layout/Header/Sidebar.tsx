import ScreenDarkener from "@/components/common/ScreenDarkener";

import { ActivePage } from "../activePage";
import Links from "./Links";
import styles from "./sidebar.module.scss";

interface Props {
  activePage: ActivePage;

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen, activePage }: Props) => (
  <ScreenDarkener
    transitionClassNames={{
      show: styles.show,
      hide: styles.hide,
      none: styles.none,
    }}
    buttonProps={{ "aria-label": "Close Menu" }}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
  >
    <ul className={styles.sideBar}>
      <Links activeClass={styles.active} activePage={activePage} />
    </ul>
  </ScreenDarkener>
);

export default Sidebar;
