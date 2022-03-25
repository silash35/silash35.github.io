import { ImgHTMLAttributes, useState } from "react";

import ScreenDarkener from "@/components/common/screenDarkener";

import styles from "./imageModal.module.scss";

interface Props {
  borderRadius?: string;
  imageProps: ImgHTMLAttributes<HTMLImageElement>;
}

const ImageModal = ({ borderRadius, imageProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  imageProps.onClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div style={{ borderRadius }} className={styles.imageModal}>
        <img {...imageProps} />
      </div>

      <ScreenDarkener
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        buttonProps={{ "aria-label": "Close Image" }}
        transitionClassNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <img className={styles.OpenedImageModal} {...imageProps} />
      </ScreenDarkener>
    </>
  );
};

export default ImageModal;
