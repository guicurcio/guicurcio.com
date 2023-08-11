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
}

/**
 * BlogPostPreview Component
 */
export default function BlogPostPreview({
  className,
  title,
  date,
}: BlogPostPreviewProps) {
  return (
    <div className="grid grid-flow-row gap-8 items-start justify-start">
      <div className="grid grid-flow-row gap-5">
        <h3 className="font-moderat text-[#868F9766] text-opacity-[40%] text-[10px] uppercase">
          {date}
        </h3>
        <div className="grid grid-flow-col gap-2 ">
          {/* <img
                src="podsfy-selection.png"
                className="w-[28px] h-[28px] rounded-[6px] blog-image-shadow"
              ></img> */}
          <h1 className="font-moderat text-center self-center mx-auto text-[#C9C9C9E0] text-opacity-[88%] text-[32px] leading-[22px] tracking[-3%] lowercase">
            {title}
          </h1>
        </div>
      </div>
      <div className="prose grid grid-flow-row gap-5">
        <p className="font-basier text-[#868F97] text-[16px] leading-[20px] tracking-[-2%]">
          Welcome to this professional intersection of software engineering,
          product strategy, and design. As an experienced software engineer with
          a focus on product development and user-centric design, this blog
          serves as an academic and professional resource, offering insights
          that stem from years of practical and theoretical involvement in the
          field.
        </p>
        <p className="font-basier text-[#868F97] text-[16px] leading-[20px] tracking-[-2%]">
          Welcome to this professional intersection of software engineering,
          product strategy, and design. As an experienced software engineer with
          a focus on product development and user-centric design, this blog
          serves as an academic and professional resource, offering insights
          that stem from years of practical and theoretical involvement in the
          field.
        </p>
        <p className="font-basier text-[#868F97] text-[16px] leading-[20px] tracking-[-2%]">
          Welcome to this professional intersection of software engineering,
          product strategy, and design. As an experienced software engineer with
          a focus on product development and user-centric design, this blog
          serves as an academic and professional resource, offering insights
          that stem from years of practical and theoretical involvement in the
          field.
        </p>
        <p className="font-basier text-[#868F97] text-[16px] leading-[20px] tracking-[-2%]">
          Welcome to this professional intersection of software engineering,
          product strategy, and design. As an experienced software engineer with
          a focus on product development and user-centric design, this blog
          serves as an academic and professional resource, offering insights
          that stem from years of practical and theoretical involvement in the
          field.
        </p>
      </div>
    </div>
  );
}
