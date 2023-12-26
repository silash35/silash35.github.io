import ScreenDarkener from "@/components/ScreenDarkener";

import Links from "./Links";
import styles from "./sidebar.module.scss";

interface Props {
  pathname: string;

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen, pathname }: Props) => (
  <ScreenDarkener
    buttonProps={{ "aria-label": "Close Menu" }}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    showClassName={styles.show}
  >
    <ul className={styles.sideBar}>
      <Links activeClass={styles.active} pathname={pathname} />
    </ul>
  </ScreenDarkener>
);

export default Sidebar;
