import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the CVEntry component.
 */
export interface CVEntryProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
  name?: string;
  postTitle?: string;
  excerpt?: string;
  children?: React.ReactNode | React.ReactNode[] | string;
  slug?: string;
}

/**
 * CVEntry Component
 */
export default function CVEntry({
  className,
  name = "",
  postTitle = "",
  excerpt = "",
  slug = "",
  children,
}: CVEntryProps): JSX.Element {
  return (
    <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, className)}>
      <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
        <div className=" grid grid-flow-row  row-span-6 h-full w-full  overflow-hidden scale-[99%] pt-[50px] ">
          <div className="bg-[#F5F5F5] border-[#EBEBEB]  bg-paper border-2 rounded-t-[1px] shadow-sm gap-1  shadow-white mx-[80px] grid grid-flow-row items-start place-items-start ">
            <div className="backdrop:backdrop-blur-[500%] pb-[50px] backdrop:backdrop-brightness-[50%]  h-full w-full block bg-white bg-opacity-80 px-10 pt-[16px]">
              <h1 className="text-black font-inter font-semibold text-[26px] mt-[-5px]">
                {postTitle}
              </h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CVEntry.displayName = "CVEntry";
