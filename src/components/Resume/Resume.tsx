import ResumeEntry from "components/ResumeEntry/ResumeEntry";
import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Resume component.
 */
export interface ResumeProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
  name?: string;
  /**
   * URL of the image
   */
  imageURL?: string;
  /**
   * The path or URL to navigate to.
   * @example
   * https://example.com/Resume
   */
  URL?: string;
}

/**
 * Resume Component
 */
export default function Resume({
  className,
  name = "",
  imageURL = "",
  URL = "",
}: ResumeProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        ...BORDER_POSTS_CLASSNAMES,
        "col-span-3",
        className
      )}
    >
      <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
        <div className="grid grid-flow-col place-content-between pt-[18px] px-[18px]   row-span-1">
          <div>
            <h1 className="font-visuelt  w-fit align-middle  text-[#F2F2F270] text-[18px] font-normal leading-[24px]">
              Resume & Work Experience
            </h1>
          </div>
        </div>
        <div className=" grid grid-flow-row  w-full items-start   text-center mx-auto">
          <ResumeEntry company="nhost.io" dates="2022-2023"></ResumeEntry>
          <ResumeEntry company="earlysquad" dates="2022-2023"></ResumeEntry>
          <ResumeEntry company="nhost.io" dates="2022-2023"></ResumeEntry>
          <ResumeEntry company="nhost.io" dates="2022-2023"></ResumeEntry>
        </div>
      </div>
    </div>
  );
}

Resume.displayName = "Resume";
