import ImageModal from "@/components/common/imageModal";

import styles from "./card.module.scss";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <article className={styles.card}>{children}</article>;
};

interface CardImageProps {
  src: string;
  alt: string;
}

Card.Image = function CardImage({ src, alt }: CardImageProps) {
  return (
    <section className={styles.image}>
      <ImageModal
        imageProps={{
          src,
          alt,
          width: "384",
          height: "216",
        }}
      />
    </section>
  );
};

Card.Content = function CardContent({ children }: Props) {
  return <section className={styles.text}>{children}</section>;
};

Card.Actions = function CardImage({ children }: Props) {
  return <section className={styles.actions}>{children}</section>;
};

export default Card;
