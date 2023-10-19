import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
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
    <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, className)}>
      <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
        <div className="grid grid-flow-col place-content-between pt-[18px] px-[18px]   row-span-1  col-span-1 ">
          <div>
            <h1 className="font-visuelt  w-fit align-middle  text-[#F2F2F270] text-[18px] font-normal leading-[24px]">
              Projects - {name}
            </h1>
          </div>
          <div>
            {/* target="_blank" */}
            <a href={URL}>
              <img
                src="assets/arrow.svg"
                className="align-start self-start mt-[-6px] cursor-pointer hover:scale-[101%] transition-all duration-500 ease-in-out"
                draggable="false"
              ></img>
            </a>
          </div>
        </div>
        <div className=" grid grid-flow-row  row-span-5 w-full  overflow-hidden ">
          <div className=" grid grid-flow-row gap-0 ">
            <div className="grid grid-flow-row mx-auto gap-0 border-t border-l border-r border-[#333333] rounded-t-[4px]">
              <div className="bg-[#191C1F]  bg-opacity-25 backdrop-blur-[3px] backdrop-brightness-[55%] rounded-t-[6px] px-3  grid grid-flow-col items-start place-items-start h-fit py-3">
                <div className=" grid grid-flow-col items-start content-start gap-2 ">
                  <div className="rounded-full w-3 h-3  bg-[#EE6A5F] "></div>
                  <div className="rounded-full w-3 h-3 bg-[#F5BD4F] "></div>
                  <div className="rounded-full w-3 h-3  bg-[#61C454]"></div>
                </div>
                <div className="grid grid-flow-col items-start content-start gap-1 bg-[#0C0F12] px-20 border border-white border-opacity-10 rounded-[6px] justify-start self-baseline mt-[-5px]">
                  <img
                    src="assets/lock.svg"
                    className="z-0 brightness-75 self-center align-middle w-3 h-3"
                    draggable="false"
                  ></img>
                  <h1 className="text-white font-mono text-[14px]">{name}</h1>
                </div>
              </div>
              <Image
                className={mergeClasses(
                  "w-[550px] h-[360px] mt-[-4px] brightness-[80%] transition-all duration-500 ease-in-out hover:brightness-105",
                  imageClassname
                )}
                src={imageURL}
                alt="asd"
                width={1920}
                height={1780}
                quality={100}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.displayName = "Project";
