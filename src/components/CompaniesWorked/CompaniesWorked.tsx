import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the CompaniesWorked component.
 */
export interface CompaniesWorkedProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
}

/**
 * CompaniesWorked Component
 */
export default function CompaniesWorked({
  className,
}: CompaniesWorkedProps): JSX.Element {
  return (
    <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "col-span-3")}>
      <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
        <div className="grid grid-flow-row  pt-[18px] px-[18px]   row-span-1  col-span-1 ">
          <h1 className="font-visuelt   text-center  text-[#FFFFFF] text-[18px] font-normal leading-[24px]">
            Companies
          </h1>
          <h1 className="font-visuelt   text-center  text-[#FFFFFF] text-[18px] font-normal leading-[24px]">
            I've worked with
          </h1>
        </div>
        <div className=" grid grid-flow-row  row-span-5 w-full  overflow-hidden "></div>
      </div>
    </div>
  );
}

CompaniesWorked.displayName = "CompaniesWorked";
