import Links from "./links";
import styles from "./sidebar.module.scss";

interface Props {
  home?: boolean;
  resume?: boolean;
  portfolio?: boolean;
  contact?: boolean;

  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen, ...props }: Props) {
  if (!open) {
    return null;
  }
  return (
    <>
      <ul className={styles.sideBar}>
        <Links activeClass={styles.active} {...props} />
      </ul>
      <button
        aria-label="Close Menu"
        className={styles.screenDarkener}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
