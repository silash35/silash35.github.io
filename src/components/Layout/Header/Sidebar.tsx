import ScreenDarkener from "@/components/common/ScreenDarkener";

import Links from "./Links";
import styles from "./sidebar.module.scss";

interface Props {
  pathname: string;

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen, pathname }: Props) => (
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
      <Links activeClass={styles.active} pathname={pathname} />
    </ul>
  </ScreenDarkener>
);

export default Sidebar;
