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
      className={mergeClasses(
        "grid w-full grid-flow-row gap-2 absolute bottom-[15px] left-[-10px] pt-[30px] ",
        "z-50 backdrop-blur-[15px] pl-[32px] backdrop-brightness-[80%] rounded-lg",
        "bg-opacity-5 bg-black shadow-3xl",
        className
      )}
    >
      <p className="text-[20px] font-lausanne font-bold text-left text-white/[0.55] leading-[18px] tracking-[-1%] ">
        {title}
      </p>
      {/* <p className="text-[12px] text-left text-white/[0.51] w-[300px] leading-[14px]">
        {description}
      </p> */}
    </div>
  );
}
