import Image from "next/image";
import { images, type ImageName } from "@/data/images";

type Props = {
  name: ImageName;
  /** Alt text. The Squarespace site left these empty; fill in during the SEO pass. */
  alt?: string;
  /** Fill the nearest positioned ancestor (used for cover-cropped images). */
  fill?: boolean;
  sizes?: string;
  className?: string;
  preload?: boolean;
};

export function Img({
  name,
  alt = "",
  fill = false,
  sizes = "100vw",
  className,
  preload = false,
}: Props) {
  const image = images[name];
  if (fill) {
    return (
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        preload={preload}
      />
    );
  }
  return (
    <Image
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      className={className}
      preload={preload}
    />
  );
}
