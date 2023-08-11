import Header from "components/Header/Header";
import Post from "components/Post/Post";
import SectionIntro from "components/SectionIntro";

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
    <div
      className="w-[480px] h-full  border-r grid grid-flow-row gap-16 place-content-start
       border-sharper  border-opacity-[25%] py-[25px]
        pl-[35px] backdrop-blur-[5px] overflow-hidden
        font-visuelt shadow-3xl backdrop-brigthness-[150%] place-items-start items-start justify-self-start"
    >
      <Header></Header>
      <img
        src="0anim.svg"
        className=" z-0 bottom-[0px] absolute left-[-10px] rotate-[10%] scale-y-[140%] scale-x-[180%]  animate-pulse2 transform scale-[110%] brightness-[150%]"
        draggable="false"
      ></img>
      <div className="grid grid-flow-row gap-y-6 justify-self-start h-full w-full">
        <Post slug="epistemic" date="2021-03-29"></Post>
        <Post slug="epistemic" date="2021-03-29"></Post>
        <Post slug="epistemic" date="2021-03-29"></Post>
      </div>
      <SectionIntro
        title="selected projects and essays"
        description="You are not obliged to complete the work, but neither are you free to
        desist from it."
      ></SectionIntro>
    </div>
  );
}
