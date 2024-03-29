"use client";

import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

import cn from "@/utils/cn";

import styles from "./button.module.scss";

interface Props {
  variant: "contained" | "text";
  onClick?: () => void;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Button = ({ variant, onClick, buttonProps, children }: Props) => {
  const asyncOnClick = async () => {
    if (typeof onClick === "function") onClick();
  };

  const ripple: MouseEventHandler<HTMLButtonElement> = (event) => {
    asyncOnClick();

    // Preparing HTML
    const $button = event.currentTarget;
    const $ripple = document.createElement("span");
    $ripple.classList.add(styles.ripple);
    $button.insertAdjacentElement("beforeend", $ripple);

    // Position values
    const buttonPosition = $button.getBoundingClientRect();

    const top = Math.abs(buttonPosition.top - event.clientY);
    const left = Math.abs(buttonPosition.left - event.clientX);
    const scale = Math.min(buttonPosition.height, buttonPosition.width); // buttonPosition.height;

    $ripple.style.setProperty("--scale", String(scale));
    $ripple.style.setProperty("--opacity", "1");
    $ripple.style.transform = `translateX(${left}px) translateY(${top}px)`;

    // Cleaning up
    $ripple.addEventListener("transitionend", () => {
      $ripple.style.setProperty("--opacity", "0");

      $ripple.addEventListener("transitionend", () => {
        $ripple.remove();
      });
    });
  };

  return (
    <button className={cn(styles.button, styles[variant])} {...buttonProps} onClick={ripple}>
      {children}
    </button>
  );
};

export default Button;
