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
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
}

/**
 * BlogComponent Component
 */
export default function BlogComponent({
  className,
  children,
  title = "",
}: BlogComponentProps) {
  return (
    <div className="">
      <BlogPostPreview title={title}>{children}</BlogPostPreview>
      <SectionIntro title={title}></SectionIntro>
    </div>
  );
}
