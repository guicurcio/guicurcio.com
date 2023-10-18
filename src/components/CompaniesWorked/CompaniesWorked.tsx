import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Project component.
 */
export interface ProjectProps {
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
   * https://example.com/Project
   */
  URL?: string;
  imageClassname?: string;
}

/**
 * Project Component
 */
export default function Project({
  className,
  name = "",
  imageURL = "",
  URL = "",
  imageClassname = "",
}: ProjectProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        ...BORDER_POSTS_CLASSNAMES,
        "col-span-3",
        className
      )}
    >
      <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
        <div className="grid grid-flow-col place-content-between pt-[18px] px-[18px]   row-span-1  col-span-1 ">
          <div>
            <h1 className="font-visuelt  w-fit align-middle  text-[#F2F2F270] text-[18px] font-normal leading-[24px]">
              Projects - {name}
            </h1>
          </div>
          <div>
            {/* target="_blank" */}
            <Link href="/cv">
              <img
                src="assets/arrow.svg"
                className="align-start self-start mt-[-6px] cursor-pointer hover:scale-[101%] transition-all duration-500 ease-in-out"
                draggable="false"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.displayName = "Project";
