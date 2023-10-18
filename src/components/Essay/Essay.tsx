import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Essay component.
 */
export interface EssayProps {
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
 * Essay Component
 */
export default function Essay({
  className,
  name = "",
  postTitle = "",
  excerpt = "",
  slug = "",
  children,
}: EssayProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        ...BORDER_POSTS_CLASSNAMES,
        "col-span-4",
        className
      )}
    >
      <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
        <div className="grid grid-flow-col place-content-between pt-[18px] px-[18px]   row-span-1  col-span-1 ">
          <div>
            <h1 className="font-visuelt  invisible w-fit align-middle  text-[#F2F2F270] text-[18px] font-normal leading-[24px]">
              Post - {name}
            </h1>
          </div>
          <div>
            <Link href={`/posts/${slug}`}>
              <img
                src="assets/arrow.svg"
                className="align-start self-start mt-[-6px] cursor-pointer hover:scale-[101%] transition-all duration-500 ease-in-out"
                draggable="false"
              ></img>
            </Link>
          </div>
        </div>
        <div className=" grid grid-flow-row  row-span-6 h-full w-full  overflow-hidden scale-[99%] ">
          <div className="bg-[#F5F5F5] border-[#EBEBEB] bg-paper border-2 rounded-t-[1px] shadow-sm gap-1  shadow-white mx-[80px] grid grid-flow-row items-start place-items-start ">
            <div className="backdrop:backdrop-blur-[500%] backdrop:backdrop-brightness-[50%]  h-full w-full block bg-white bg-opacity-80 px-10 pt-[16px]">
              <p className="text-[14px] font-light font-inter text-[#707070]  leading-[18.2px] tracking-[-0.07px] text-justify pt-[20px]">
                Date published: 01/10/2023
              </p>
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

Essay.displayName = "Essay";
