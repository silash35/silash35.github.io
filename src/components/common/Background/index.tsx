import styles from "./background.module.scss";

export default function Background() {
  return (
    <div className={styles.background}>
      <img
        alt="Black background with incandescent light bulbs"
        src="/images/power.webp"
        aria-hidden="true"
      />
    </div>
  );
}
