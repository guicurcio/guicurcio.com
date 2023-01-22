import BlogPostPreview from "components/BlogPostPreview";
import SectionIntro from "components/SectionIntro";
import { twMerge } from "tailwind-merge";

/**
 * Projects Props description
 */
export interface ProjectsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Projects Component
 */
export default function Projects({ className }: ProjectsProps) {
  return (
    <div className={twMerge("", className)}>
      <div
        className="h-[536px] w-[1172px] overflow-hidden rounded-[15px] border
       border-sharper  border-opacity-10 py-[25px]  px-[20px]  bg-black bg-opacity-[95%] backdrop-blur-[10px] font-visuelt shadow-3xl "
      >
        <div className="grid grid-flow-col gap-6"></div>
        <SectionIntro
          title="Selected Projects"
          description="You are not obligated to complete the work, but neither are you free to
        desist from it (2:21).”"
        ></SectionIntro>
      </div>
    </div>
  );
}
