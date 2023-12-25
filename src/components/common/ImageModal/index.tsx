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
        transitionClassNames={{
          show: styles.show,
          hide: styles.hide,
          none: styles.none,
        }}
        buttonProps={{ "aria-label": "Close Image" }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <img className={styles.OpenedImageModal} {...imageProps} />
      </ScreenDarkener>
    </>
  );
};

export default ImageModal;
