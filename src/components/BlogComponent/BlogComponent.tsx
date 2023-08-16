import BlogPostPreview from "components/BlogPostPreview";
import { ReactNode } from "react";

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
    </div>
  );
}
