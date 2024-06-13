import type { ComponentPropsWithoutRef, ImgHTMLAttributes } from "react";

import Link from "@/components/Link";

import styles from "./iconLink.module.scss";

interface Props {
  linkProps: ComponentPropsWithoutRef<typeof Link>;
  imgProps: ImgHTMLAttributes<HTMLImageElement>;
}

const IconLink = ({ linkProps, imgProps }: Props) => (
  <Link className={styles.iconLink} {...linkProps}>
    <img height="35" width="35" {...imgProps} />
  </Link>
);

export default IconLink;
