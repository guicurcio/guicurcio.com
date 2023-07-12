import { twMerge } from "tailwind-merge";

/**
 * ImagePreview Props description
 */
export interface ImagePreviewProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  srcImage?: string;
}

/**
 * ImagePreview Component
 */
export default function ImagePreview({
  className,
  srcImage,
}: ImagePreviewProps) {
  return (
    <div
      className={twMerge(
        "cursor-pointer flex justify-center items-center z-50  h-[314px] my-[5px]",
        className
      )}
    >
      <img
        src={srcImage || "podsfy-selection.png"}
        className="hover:scale-[102%] z-50  transition-all  duration-500 ease-in-out  hover:brightness-[125%]"
        draggable="false"
      ></img>
    </div>
  );
}
