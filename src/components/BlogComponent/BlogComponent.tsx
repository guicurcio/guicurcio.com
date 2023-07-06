import BlogPostPreview from "components/BlogPostPreview";
import SectionIntro from "components/SectionIntro";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
    <div className={twMerge("", className)}>
      <div
        className="h-[600px] w-[600px]
        overflow-hidden rounded-[5px] border
       border-sharper  border-opacity-10 py-[25px]
        px-[20px]  bg-black bg-opacity-[95%]
        backdrop-blur-[10px] font-visuelt shadow-3xl relative"
      >
        <div className="grid grid-flow-row gap-6">{children}</div>
        <SectionIntro
          title="blog & behind the scenes"
          description="Jeremy Bentham often wrote prose that, like Jorge Luis Borges, had to be solved rather than just read."
        ></SectionIntro>
      </div>
    </div>
  );
}
