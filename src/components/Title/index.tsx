import type { HTMLAttributes } from "react";

import cn from "@/utils/cn";

import styles from "./title.module.scss";

const Title = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={cn(styles.title, className)} {...props} />
);

export default Title;
