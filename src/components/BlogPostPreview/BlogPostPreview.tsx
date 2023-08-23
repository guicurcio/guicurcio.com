import PostTitle from "components/PostTitle/PostTitle";
import Text from "components/Text/Text";
import { ReactNode } from "react";
import mergeClasses from "utils/mergeClasses";

/**
 * BlogPostPreview Props description
 */
export interface BlogPostPreviewProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  date?: string;
  children?: ReactNode | ReactNode[] | string | string[];
  /**
   * URL of the image
   */
  imageURL?: string;
}

/**
 * BlogPostPreview Component
 */
export default function BlogPostPreview({
  className,
  title,
  date,
  children,
  imageURL,
}: BlogPostPreviewProps) {
  return (
    <div className="grid grid-flow-row gap-8  h-full w-full place-content-start mx-auto pl-[30px] pr-[40px]">
      <div className="grid grid-flow-row gap-5">
        <div className="grid grid-flow-col gap-2 ">
          <img
            src={imageURL || "podsfy-selection.png"}
            className="w-[450px] h-[305px] rounded-[6px] mx-auto border-[1px] border-sharper border-opacity-[25%]"
          ></img>
          {/* <h1 className="font-moderat text-center self-center mx-auto text-[#C9C9C9E0] text-opacity-[88%] text-[32px] leading-[22px] tracking[-3%] lowercase">
            {title}
          </h1> */}
        </div>
      </div>
      <div className=" grid grid-flow-row gap-5 items-start place-content-start">
        {children}
      </div>
    </div>
  );
}
