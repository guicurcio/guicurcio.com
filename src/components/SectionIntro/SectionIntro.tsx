import { twMerge } from "tailwind-merge";
import mergeClasses from "utils/mergeClasses";

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
}

/**
 * SectionIntro Component
 */
export default function SectionIntro({ className, title }: SectionIntroProps) {
  return (
    <div
      className={mergeClasses(
        "grid grid-flow-row sticky bottom-[2px] w-full",
        "z-50 backdrop-blur-[155%] backdrop-brightness-[20%] backdrop-contrast-[550%]",
        className
      )}
    >
      <p className="text-[20px] font-lausanne font-bold text-left text-white/[0.55] leading-[18px] tracking-[-1%]">
        {title}
      </p>
    </div>
  );
}
