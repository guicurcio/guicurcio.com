import Link from "next/link";
import { twMerge } from "tailwind-merge";

/**
 * ImagePreview Props description
 */
export interface ImagePreviewProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  imgClassName?: string;
  srcImage?: string;
}

/**
 * ImagePreview Component
 */
export default function ImagePreview({
  className,
  srcImage,
  imgClassName,
}: ImagePreviewProps) {
  return (
    <Link
      href="/podsfy"
      className={twMerge(
        "cursor-pointer col-span-1 justify-center items-center z-50 h-full w-full",
        className
      )}
    >
      <img
        src={srcImage || "podsfy-selection.png"}
        className={twMerge(
          "z-[100] h-[160px] w-[260px] rounded-md transition-all  duration-500 ease-in-out  hover:brightness-[125%]",
          imgClassName
        )}
        draggable="false"
      ></img>
    </Link>
  );
}
