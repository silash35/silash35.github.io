import Image from "next/image";

import styles from "./background.module.scss";

export default function Background() {
  return (
    <div className={styles.bgWrap}>
      <Image alt="Mountains" src="/images/power.webp" layout="fill" objectFit="cover" />
    </div>
  );
}
