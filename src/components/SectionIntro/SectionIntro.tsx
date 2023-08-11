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
        "grid grid-flow-row gap-2 absolute bottom-[20px] left-[20px] mx-[16px] z-50",
        className
      )}
    >
      <p className="text-[20px] font-lausanne font-bold text-left text-white/[0.55] leading-[18px] tracking-[-1%] ">
        {title}
      </p>
      <p className="text-[12px] text-left text-white/[0.21] w-[300px] leading-[14px]">
        {description}
      </p>
    </div>
  );
}
