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
      className="h-screen w-[480px]  border-r grid grid-flow-row gap-16
       border-sharper  border-opacity-[25%] py-[25px]
        pl-[35px]   relative backdrop-blur-[150px] overflow-hidden
        font-visuelt shadow-3xl backdrop-brigthness-[50%] place-items-start items-start"
    >
      <Header></Header>
      <img
        src="0anim.svg"
        className=" z-0 bottom-[0px] absolute left-[-10px] rotate-[10%] scale-y-[140%] scale-x-[180%]  animate-pulse2 transform scale-[110%] brightness-[150%]"
        draggable="false"
      ></img>
      <div className="grid grid-flow-row gap-y-6 place-self-start justify-start">
        {/* py-[35px] w-full h-full animate-marquee" */}
        <Post slug="epistemic"></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        {/* <ImagePreview></ImagePreview>
          <ImagePreview
            srcImage="subjeto-selection.png"
            imgClassName="scale-y-[115%] scale-x-[110%]"
          ></ImagePreview>
          <ImagePreview srcImage="subidos-selection.png"></ImagePreview> */}
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
  );
}
