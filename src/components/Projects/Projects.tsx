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
export default function Projects({
  className,
}: ProjectsProps) {
  return (
    <div className={twMerge("", className)}>
      <div
        className="h-screen overflow-y-hidden w-[600px] overflow-hidden rounded-l-[5px] border-r
       border-sharper  border-opacity-10 py-[25px]
        px-[20px]  bg-black bg-opacity-[100%] relative backdrop-blur-[150px]
        font-visuelt shadow-3xl backdrop-brigthness-[250%]"
      >
        <img
          src="0anim.svg"
          className=" z-0 top-[20px] absolute right-[28px] scale-y-[120%] animate-pulse2 transform scale-[110%] brightness-[150%]"
          draggable="false"
        ></img>
        <div
          className="grid grid-flow-row grid-rows-2  bg-black
        w-full h-full"
        >
          {/* py-[35px] w-full h-full animate-marquee" */}

          <ImagePreview></ImagePreview>
          <ImagePreview
            srcImage="subjeto-selection.png"
            imgClassName="scale-y-[115%] scale-x-[110%]"
          ></ImagePreview>
          <ImagePreview srcImage="subidos-selection.png"></ImagePreview>
          {/* <ImagePreview></ImagePreview> */}
          {/* <ImagePreview></ImagePreview> */}

          {/* <div
            className="
            cursor-pointer  justify-center items-center ease-in-out z-50   transition-transform duration-[5000ms]"
          >
            <img
              src="subjeto-selection.png"
              className=" hover:scale-[122%] duration-[5000ms] transition-all  brightness-[55%]   hover:brightness-[75%]"
              draggable="false"
            ></img>
          </div> */}
          {/* <ImagePreview></ImagePreview> */}
        </div>
        <SectionIntro
          title="selected projects and essays"
          description="You are not obliged to complete the work, but neither are you free to
        desist from it."
        ></SectionIntro>
      </div>
    </div>
  );
}
