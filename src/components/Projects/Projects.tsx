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
export default function Projects({
  className,
}: ProjectsProps) {
  return (
      <div
        // className="h-screen w-[600px]  border-r grid grid-flow-row gap-6
        className="h-screen w-[500px]  border-r grid grid-flow-row gap-6
       border-sharper  border-opacity-100 py-[25px]
        px-[20px]    relative backdrop-blur-[150px]
        font-visuelt shadow-3xl backdrop-brigthness-[50%]"
      >
              <div className="w-[500px] h-[114px] p-[50px]">
            <div className="grid grid-flow-col gap-4 items-center justify-center">
              <div className="">
                <img
                  src="https://guicurcio.com/assets/github-avatar.png"
                  className="rounded-full w-[80px] h-[80px]"
                ></img>
              </div>
              <div className="grid grid-flow-row gap-1 ">
                <h1 className="font-moderat text-white text-[22px]">
                  Guido Curcio
                </h1>
                <p className="font-moderat text-white text-[14px] leading-[17.5px] tracking-[-12%] text-opacity-[60%] w-[290px]">
                  I'm an engineer.<br></br>
                  Rarely a writer, but always a
                  reader -- more of a listener
                  than a talker. <br></br>
                  {/* CEO and founder of subjeto.com */}
                  <br></br>
                  {/* Here, you will encounter the most recent projects I’ve worked
                  in. In the blog, most often, I write about inventing on
                  principle. */}
                </p>
              </div>
            </div>
          </div>
        <img
          src="0anim.svg"
          className=" z-0 bottom-[0px] absolute left-[-10px] rotate-[10%] scale-y-[140%] scale-x-[180%]  animate-pulse2 transform scale-[110%] brightness-[150%]"
          draggable="false"
        ></img>
        <div
          className="grid grid-flow-row 
        w-full h-full"
        >
          {/* py-[35px] w-full h-full animate-marquee" */}
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
