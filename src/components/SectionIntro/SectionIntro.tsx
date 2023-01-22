import { twMerge } from "tailwind-merge";

/**
 * SectionIntro Props description
 */
export interface SectionIntroProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Title of the section
   */
  title: string;
  /**
   * Description of the section
   * @default "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
   */
  description: string;
}

/**
 * SectionIntro Component
 */
export default function SectionIntro({
  className,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div
      className={twMerge(
        "grid grid-flow-row gap-1 absolute bottom-[20px] left-[20px] mx-[16px]",
        className
      )}
    >
      <p className="text-[19px] font-lausanne font-bold text-left text-white/[0.49] leading-[18px] tracking-[-2%] ">
        {title}
      </p>
      <p className="text-[11px] text-left text-white/[0.21] w-[300px]">
        {description}
      </p>
    </div>
  );
}
