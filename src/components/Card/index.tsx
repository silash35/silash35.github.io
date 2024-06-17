import { Slot } from "@radix-ui/react-slot";
import type { HTMLProps } from "react";

import cn from "@/utils/cn";

import styles from "./card.module.scss";

interface Props extends HTMLProps<HTMLDivElement> {
  asChild?: boolean;
  variant: "filled" | "outlined";
}

const Card = ({ asChild, variant, className, ...componentProps }: Props) => {
  const Component = asChild ? Slot : "div";

  return <Component className={cn(styles.card, styles[variant], className)} {...componentProps} />;
};

export default Card;
