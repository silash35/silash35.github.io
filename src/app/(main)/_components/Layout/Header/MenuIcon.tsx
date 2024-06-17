import cn from "@/utils/cn";

import styles from "./menuIcon.module.scss";

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className={cn(styles.iconWrapper, isOpen ? styles.open : "")}>
    <div className={cn(styles.lineWrapper, styles.top)}>
      <div className={styles.line} />
    </div>
    <div className={cn(styles.lineWrapper, styles.middle)}>
      <div className={styles.line} />
    </div>
    <div className={cn(styles.lineWrapper, styles.bottom)}>
      <div className={styles.line} />
    </div>
  </div>
);

export default MenuIcon;
