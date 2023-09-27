import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the AboutMe component.
 */
export interface AboutMeProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
}

/**
 * AboutMe Component
 */
export default function AboutMe({ className }: AboutMeProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        ...BORDER_POSTS_CLASSNAMES,
        "relative overflow-y-hidden lg:col-span-4 grid col-span-12 row-span-2"
      )}
    >
      <img
        src="0anim.svg"
        className="z-0 bottom-[-180px] right-[10px] overflow-y-hidden  absolute  rotate-[50%] scale-y-[280%] scale-x-[350%] animate-pulse transform brightness-[90%]"
        draggable="false"
      ></img>
      <div className="grid grid-flow-row content-between">
        <div className="px-[25px] py-[20px] grid grid-flow-row gap-2 content-start">
          <h1 className="font-visuelt text-[#F2F2F2] text-[26px] font-normal leading-[24px] h-fit">
            Guido Curcio
          </h1>
          <h1 className="text-[#F2F2F290] text-[16px] font-moderat leading-[22px] lg:w-[380px] h-fit">
            I’m an engineer. <br></br> Rarely a writer, but always a reader --
            more of a listener than a talker.
          </h1>
        </div>
        <div className="px-[25px] pb-[20px] grid grid-flow-row gap-[1px] content-start">
          <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px] h-fit">
            Senior Product Engineer
          </h1>
          <h1 className="text-[#F2F2F290] text-[16px] font-moderat leading-[22px] lg:w-[380px] h-fit">
            Buenos Aires, Argentina
          </h1>
        </div>
      </div>
    </div>
  );
}

AboutMe.displayName = "AboutMe";
