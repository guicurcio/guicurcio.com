import mergeClasses from "utils/mergeClasses";

/**
 * Props for the PostTitle component.
 */
export interface PostTitleProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  children: React.ReactNode | React.ReactNode[] | string;
}

/**
 * PostTitle Component
 */
export default function PostTitle({
  className,
  children,
  ...props
}: PostTitleProps): JSX.Element {
  return (
    <p
      className={mergeClasses(
        "duration-2000 font-moderat text-[22px] font-normal tracking-normal text-[rgba(201,201,201,0.75)] text-opacity-60 antialiased shadow-none transition-all",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

PostTitle.displayName = "PostTitle";
