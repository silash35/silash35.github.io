import type { ImgHTMLAttributes } from "react";

import ImageModal from "@/components/common/ImageModal";

import styles from "./card.module.scss";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => <article className={styles.card}>{children}</article>;

Card.image = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <section className={styles.image}>
    <ImageModal
      imageProps={{
        width: "384",
        height: "216",
        ...props,
      }}
    />
  </section>
);

Card.content = ({ children }: Props) => <section className={styles.text}>{children}</section>;

Card.actions = ({ children }: Props) => <section className={styles.actions}>{children}</section>;

export default Card;
