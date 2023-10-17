import mergeClasses from "utils/mergeClasses";

/**
 * Props for the ResumeEntry component.
 */
export interface ResumeEntryProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
  company?: string;
  /**
   * URL of the image
   */
  dates?: string;
}

/**
 * ResumeEntry Component
 */
export default function ResumeEntry({
  className,
  company = "",
  dates = "",
}: ResumeEntryProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        "grid grid-flow-col  font-moderat mx-auto",
        className
      )}
    >
      <div>
        <h1 className="text-[#888888] self-center align-middle ">{company}</h1>
      </div>
      <div className="h-[1px] w-[100px] mx-[20px]   bg-[#FFFFFF20] self-center align-middle"></div>
      <h1 className="text-[#888888] self-center align-middle">{dates}</h1>
    </div>
  );
}

ResumeEntry.displayName = "ResumeEntry";
