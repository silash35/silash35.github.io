import type { ImgHTMLAttributes } from "react";

import ImageModal from "@/components/common/ImageModal";

import styles from "./card.module.scss";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <article className={styles.card}>{children}</article>;
};

Card.Image = function CardImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
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
};

Card.Content = function CardContent({ children }: Props) {
  return <section className={styles.text}>{children}</section>;
};

Card.Actions = function CardActions({ children }: Props) {
  return <section className={styles.actions}>{children}</section>;
};

export default Card;
