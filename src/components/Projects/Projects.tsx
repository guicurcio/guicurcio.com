import ImagePreview from "components/BlogComponent copy/ImagePreview";
import SectionIntro from "components/SectionIntro";
import { twMerge } from "tailwind-merge";

/**
 * Projects Props description
 */
export interface ProjectsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Projects Component
 */
export default function Projects({ className }: ProjectsProps) {
  return (
    <div className={twMerge("", className)}>
      <div
        className="h-[600px] w-[1172px] overflow-hidden rounded-[5px] border
       border-sharper  border-opacity-10 py-[25px]
        px-[20px]  bg-black bg-opacity-[100%] relative backdrop-blur-[150px]
        font-visuelt shadow-3xl backdrop-brigthness-[150%]"
      >
        <div
          className="grid grid-flow-col gap-2 px-[14px]
         py-[35px] w-full h-full animate-marquee"
        >
          <ImagePreview></ImagePreview>
          <div
            className="
            cursor-pointer  justify-center items-center ease-in-out z-50   transition-transform duration-[5000ms]"
          >
            <img
              src="subjeto-selection.png"
              className=" hover:scale-[102%] duration-[5000ms] transition-all  brightness-[55%]   hover:brightness-[75%]"
              draggable="false"
            ></img>
          </div>
          <div
            className="
            cursor-pointer  justify-center items-center ease-in-out z-50   transition-transform duration-[5000ms]"
          >
            <img
              src="subjeto-selection.png"
              className=" hover:scale-[102%] duration-[5000ms] transition-all  brightness-[55%]   hover:brightness-[75%]"
              draggable="false"
            ></img>
          </div>
          {/* <ImagePreview></ImagePreview> */}
        </div>
        <SectionIntro
          title="selected projects and essays"
          description="You are not obliged to complete the work, but neither are you free to
        desist from it."
        ></SectionIntro>
        <img
          src="0anim.svg"
          className="h-[567px] z-0 top-[-20px] absolute right-[28px] w-[600px] animate-pulse2 transform scale-[110%] brightness-[150%]"
          draggable="false"
        ></img>
      </div>
    </div>
  );
}
