import BlogPostPreview from "components/BlogPostPreview";
import SectionIntro from "components/SectionIntro";
import { ReactNode } from "react";
import mergeClasses from "utils/mergeClasses";

/**
 * BlogComponent Props description
 */
export interface BlogComponentProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  children?: ReactNode | ReactNode[];
}

/**
 * BlogComponent Component
 */
export default function BlogComponent({
  className,
  children,
}: BlogComponentProps) {
  return (
    <div
      className={mergeClasses(
        "h-full w-[700px] grid grid-flow-row gap-6",
        "border-sharper  border-opacity-10 py-[25px]",
        "pl-[20px]   bg-opacity-[95%]",
        "backdrop-blur-[3px] font-visuelt shadow-3xl relative ",
        "overflow-y-scroll  scrollbar-thumb-fondy scrollbar-track-read scrollbar-thin"
      )}
    >
      <BlogPostPreview title="the epistemic trinity"></BlogPostPreview>
      {/* <SectionIntro title="blog & behind the scenes"></SectionIntro> */}
    </div>
  );
}
