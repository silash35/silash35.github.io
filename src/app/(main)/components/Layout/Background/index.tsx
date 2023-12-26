import styles from "./background.module.scss";

const Background = () => (
  <div className={styles.background}>
    <img
      alt="Black background with incandescent light bulbs"
      aria-hidden="true"
      src="/images/power.webp"
    />
  </div>
);

export default Background;
