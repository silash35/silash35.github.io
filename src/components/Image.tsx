import type { StaticImageData } from "next/image";
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

const Image = (props: ExportedImageProps) => (
  <ExportedImage
    draggable={false}
    placeholder={isSVG(props.src) ? "empty" : "blur"}
    sizes="90vw"
    {...props}
  />
);

export default Image;

const isSVG = (src: string | StaticImageData) => {
  if (typeof src === "string") {
    return src.endsWith(".svg");
  }

  return src.src.endsWith(".svg");
};
