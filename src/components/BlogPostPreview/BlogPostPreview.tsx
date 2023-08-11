
/**
 * BlogPostPreview Props description
 */
export interface BlogPostPreviewProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  date?: string;
  children: any;
}

/**
 * BlogPostPreview Component
 */
export default function BlogPostPreview({
  className,
  title,
  children,
  date,
}: BlogPostPreviewProps) {
  return (
        <div className="grid grid-flow-row gap-3 items-start justify-start">
          <div className="grid grid-flow-row gap-1">
            <h3 className="font-moderat text-[#868F9766] text-opacity-[40%] text-[10px] uppercase">
              {date}
            </h3>
            <div className="grid grid-flow-col gap-2 ">
              {/* <img
                src="podsfy-selection.png"
                className="w-[28px] h-[28px] rounded-[6px] blog-image-shadow"
              ></img> */}
              <h2 className="font-moderat text-center self-center mx-auto text-[#C9C9C9E0] text-opacity-[88%] text-[22px] leading-[22px] tracking[-3%] lowercase">
                {title}
              </h2>
            </div>
          </div>
          {children}
        </div>
  );
}
