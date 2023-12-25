"use client";

import { ImgHTMLAttributes, useState } from "react";

import ScreenDarkener from "@/components/common/ScreenDarkener";

import styles from "./imageModal.module.scss";

interface Props {
  borderRadius?: string;
  className?: string;
  imageProps: ImgHTMLAttributes<HTMLImageElement>;
}

const ImageModal = ({ borderRadius, className, imageProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  imageProps.onClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className={`${styles.imageModal} ${className}`} style={{ borderRadius }}>
        <img {...imageProps} />
      </div>

      <ScreenDarkener
        buttonProps={{ "aria-label": "Close Image" }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        showClassName={styles.show}
      >
        <img className={styles.OpenedImageModal} {...imageProps} />
      </ScreenDarkener>
    </>
  );
};

export default ImageModal;
