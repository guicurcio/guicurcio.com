import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Text component.
 */
export interface TextProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  children: React.ReactNode | React.ReactNode[] | string;
}

/**
 * Text Component
 */
export default function Text({
  className,
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <p
      className={mergeClasses(
        "duration-2000 font-moderat text-[16px] font-normal tracking-normal text-[rgba(201,201,201,0.75)] text-opacity-60 antialiased shadow-none transition-all",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

Text.displayName = "Text";
