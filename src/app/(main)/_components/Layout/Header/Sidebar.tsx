import cn from "@/utils/cn";

import Links from "./Links";
import styles from "./sidebar.module.scss";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => (
  <ul className={cn(styles.sideBar, isOpen ? styles.open : "")}>
    <Links activeClass={styles.active} />
  </ul>
);

export default Sidebar;
