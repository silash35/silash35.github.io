"use client";

import { PropsWithChildren } from "react";

import cn from "@/utils/cn";

import styles from "./button.module.scss";

interface Props<T extends React.ElementType> extends PropsWithChildren {
  as?: T;
  variant: "contained" | "text";
  className?: string;
}

const Button = <T extends React.ElementType = "button">(
  props: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>,
) => {
  const { as, variant, className, ...componentProps } = props;
  const Component = as || "button";

  return (
    <Component className={cn(styles.button, styles[variant], className)} {...componentProps} />
  );
};

export default Button;
