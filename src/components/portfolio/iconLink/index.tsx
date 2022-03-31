import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

import styles from "./iconLink.module.scss";

interface Props {
  linkProps: AnchorHTMLAttributes<HTMLAnchorElement>;
  imgProps: ImgHTMLAttributes<HTMLImageElement>;
}

const IconLink = ({ linkProps, imgProps }: Props) => {
  return (
    <a className={styles.iconLink} rel="noopener noreferrer" target="_blank" {...linkProps}>
      <img width="35" height="35" {...imgProps} />
    </a>
  );
};

export default IconLink;
