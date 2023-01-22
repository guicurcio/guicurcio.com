import BlogPostPreview from "components/BlogPostPreview";
import SectionIntro from "components/SectionIntro";
import { twMerge } from "tailwind-merge";

/**
 * BlogComponent Props description
 */
export interface BlogComponentProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * BlogComponent Component
 */
export default function BlogComponent({ className }: BlogComponentProps) {
  return (
    <div className={twMerge("", className)}>
      <div
        className="h-[536px] lg:w-[630px] md:w-[600px]   overflow-hidden rounded-[15px] border
       border-sharper  border-opacity-10 py-[25px]  px-[20px]  bg-black bg-opacity-[95%] backdrop-blur-[10px] font-visuelt shadow-3xl "
      >
        <div className="grid grid-flow-row gap-6">
          <BlogPostPreview></BlogPostPreview>
          <BlogPostPreview></BlogPostPreview>
        </div>
        <SectionIntro
          title="blog"
          description="You are not obligated to complete the work, but neither are you free to
        desist from it (2:21).”"
        ></SectionIntro>
      </div>
    </div>
  );
}
