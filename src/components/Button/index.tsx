import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

import cn from "@/utils/cn";

import styles from "./button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant: "contained" | "outlined" | "text";
}

const Button = ({ asChild, variant, className, ...componentProps }: Props) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component className={cn(styles.button, styles[variant], className)} {...componentProps} />
  );
};

export default Button;
