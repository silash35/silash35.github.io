import { ImgHTMLAttributes, PropsWithChildren } from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import ImageModal from "@/components/ImageModal";
import Link from "@/components/Link";

import styles from "./item.module.scss";

interface ItemProps extends PropsWithChildren {
  imageProps: ImgHTMLAttributes<HTMLImageElement>;
}

const Item = ({ imageProps, children }: ItemProps) => (
  <Card className={styles.item} variant="filled" asChild>
    <article>
      <ImageModal className={styles.image} imageProps={imageProps} />
      <div className={styles.content}>{children}</div>
    </article>
  </Card>
);

Item.actions = ({ children }: PropsWithChildren) => (
  <div className={styles.actions}>{children}</div>
);

interface ActionProps extends PropsWithChildren {
  href: string;
  title?: string;
}

Item.action = (props: ActionProps) => (
  <Button variant="outlined" asChild>
    <Link {...props}></Link>
  </Button>
);

export default Item;
