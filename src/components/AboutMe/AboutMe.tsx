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
        "relative overflow-hidden",
        className
      )}
    >
      <img
        src="0anim.svg"
        className="z-0 bottom-[-180px] right-[20px] overflow-y-hidden -rotate-[10deg]  absolute scale-y-[100%] scale-x-[120%] animate-pulse transform brightness-[120%] overflow-hidden"
        draggable="false"
      ></img>
      <div className="grid grid-flow-row content-between">
        <div className="grid grid-flow-col px-[20px] pt-[20px] items-center content-start place-content-start gap-4">
          <div className="w-[150px] h-[150px]">
            <img
              src="about/pers3.jpg"
              className="rounded-full z-50 object-cover w-[250px] h-[150px]  border border-opacity-10 border-white"
              draggable="false"
            ></img>
          </div>
          <div className="grid grid-flow-row gap-0">
            <h1 className="font-visuelt text-[#F2F2F2] text-[26px] font-normal leading-[24px] h-fit">
              Guido Curcio
            </h1>
            <h2 className="text-[#F2F2F290] text-[16px] font-moderat leading-[22px] xl:w-[320px] h-fit">
              I’m an engineer. <br></br> Rarely a writer, but always a reader --
              more of a listener than a talker.
            </h2>
          </div>
        </div>
        <div className="px-[25px] py-[20px] grid grid-flow-row gap-[1px] content-start">
          <div className="grid grid-flow-col gap-[15px] content-start items-baseline pb-[10px] place-content-start pl-[3px]">
            <a
              href="https://linkedin.com/guicurcio"
              target="_blank"
              className="cursor-pointer z-50"
            >
              <img
                src="assets/socials/linkedin.svg"
                className="align-middle self-center"
                draggable="false"
              ></img>
            </a>
            <a
              href="https://github.com/guicurcio"
              className="cursor-pointer z-50"
              target="_blank"
            >
              <img
                src="assets/socials/github.svg"
                className="align-middle self-center"
                draggable="false"
              ></img>
            </a>
            <a
              href="https://twitter.com/guicurcio"
              target="_blank"
              className="cursor-pointer z-50"
            >
              <img
                src="assets/socials/twitter.svg"
                className="align-middle self-center"
                draggable="false"
              ></img>
            </a>
          </div>
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
