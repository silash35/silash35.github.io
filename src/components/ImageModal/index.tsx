"use client";

import { useState } from "react";

import Image from "@/components/Image";
import ScreenDarkener from "@/components/ScreenDarkener";
import cn from "@/others/cn";

import styles from "./imageModal.module.scss";

interface Props {
  className?: string;
  imageProps: React.ComponentProps<typeof Image>;
}

const ImageModal = ({ className, imageProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  imageProps.onClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className={cn(styles.imageModal, className)}>
        <Image {...imageProps} />
      </div>

      <ScreenDarkener
        buttonProps={{ "aria-label": "Close Image" }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        showClassName={styles.show}
      >
        <Image className={styles.OpenedImageModal} {...imageProps} sizes="90vw" />
      </ScreenDarkener>
    </>
  );
};

export default ImageModal;
