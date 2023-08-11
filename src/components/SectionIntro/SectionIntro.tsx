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
        "grid w-full grid-flow-row gap-2 absolute bottom-[20px] left-[0px] pt-[30px] ",
        "z-50 backdrop-blur-[15px] pl-[22px] backdrop-brightness-[50%] rounded-t-md",
        className
      )}
    >
      <p className="text-[20px] font-lausanne font-bold text-left text-white/[0.55] leading-[18px] tracking-[-1%] ">
        {title}
      </p>
      <p className="text-[12px] text-left text-white/[0.51] w-[300px] leading-[14px]">
        {description}
      </p>
    </div>
  );
}
