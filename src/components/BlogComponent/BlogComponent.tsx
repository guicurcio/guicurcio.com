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
    <div
      className="h-full w-[700px] grid grid-flow-row gap-6
        overflow-hidden rounded-r-[5px] border-r
       border-sharper  border-opacity-10 py-[25px]
        px-[20px]   bg-opacity-[95%]
        backdrop-blur-[3px] font-visuelt shadow-3xl relative justify-start items-start"
    >
      <BlogPostPreview title="guicurcio.com">
        <p className="font-moderat text-[#868F97] text-[14px] leading-[18px] tracking-[-2%]">
          Welcome to this professional intersection of software engineering,
          product strategy, and design. As an experienced software engineer with
          a focus on product development and user-centric design, this blog
          serves as an academic and professional resource, offering insights
          that stem from years of practical and theoretical involvement in the
          field.
        </p>

        <p className="font-moderat text-[#868F97] text-[14px] leading-[18px] tracking-[-2%]">
          Here, you'll discover detailed analyses of system architectures,
          in-depth discussions on performance optimization, and application of
          the latest techniques in software development. The section on product
          strategy combines rigorous academic scrutiny and practical insights,
          while the design segment brings thoughtful discourse on user
          experience and design impacts on product success.
        </p>

        <p className="font-moderat text-[#868F97] text-[14px] leading-[18px] tracking-[-2%]">
          This space is crafted with professionals, academicians, and curious
          individuals in mind. Whether you're interested in a technical
          deep-dive, a data-driven exploration of product strategy, or an
          analytical dissection of design philosophy, there's a wealth of
          knowledge here for you.
        </p>

        <p className="font-moderat text-[#868F97] text-[14px] leading-[18px] tracking-[-2%]">
          I encourage you to explore the various sections of the blog, each
          designed to provoke thought and foster intellectual growth. Thank you
          for your visit, and I look forward to contributing to your journey of
          continuous learning in the dynamic landscape of technology.
        </p>
      </BlogPostPreview>
      <SectionIntro
        title="blog & behind the scenes"
        description="Jeremy Bentham often wrote prose that, like Jorge Luis Borges, had to be solved rather than just read."
      ></SectionIntro>
    </div>
  );
}
