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
      <div
        className="h-full w-[800px] grid grid-flow-row gap-6
        overflow-hidden rounded-r-[5px] border-r
       border-sharper  border-opacity-10 py-[25px]
        px-[20px]   bg-opacity-[95%]
        backdrop-blur-[12px] font-visuelt shadow-3xl relative justify-start items-start"
      >
        {children}
        <SectionIntro
          title="blog & behind the scenes"
          description="Jeremy Bentham often wrote prose that, like Jorge Luis Borges, had to be solved rather than just read."
        ></SectionIntro>
      </div>
  );
}
