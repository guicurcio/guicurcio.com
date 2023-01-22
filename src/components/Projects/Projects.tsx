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
        className="h-[536px] w-[1172px] overflow-hidden rounded-[5px] border
       border-sharper  border-opacity-10 py-[25px]  px-[20px]  bg-black bg-opacity-[95%] relative backdrop-blur-[10px] font-visuelt shadow-3xl "
      >
        <div className="grid grid-flow-col gap-2 px-[14px] py-[35px] w-full h-full  animate-marquee">
          <div
            className="
           cursor-pointer flex justify-center items-center z-50  h-[314px] my-[5px]"
          >
            <img
              src="podsfy-selection.png"
              className="   hover:scale-[102%]  transition-all  duration-500 ease-in-out  hover:brightness-[125%]"
            ></img>
          </div>
          <div
            className="
            cursor-pointer  flex justify-center items-center z-50  h-[314px]"
          >
            <img
              src="subjeto-selection.png"
              className=" hover:scale-[102%]  transition-all duration-500 ease-in-out brightness-[55%]   hover:brightness-[75%]"
            ></img>
          </div>
        </div>
        <SectionIntro
          title="Selected Projects"
          description="You are not obligated to complete the work, but neither are you free to
        desist from it (2:21).”"
        ></SectionIntro>
        <img
          src="0anim.svg"
          className="h-[567px] top-[-50px] absolute right-[28px] w-[600px]  z-0 animate-pulse2 transform scale-[110%] brightness-[150%]"
          draggable="false"
        ></img>
      </div>
    </div>
  );
}
