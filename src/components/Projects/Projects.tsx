import Header from "components/Header/Header";
import Post from "components/Post/Post";
import SectionIntro from "components/SectionIntro";
import mergeClasses from "utils/mergeClasses";

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
      className="w-[480px] border-r grid grid-flow-row gap-16 place-content-start
       border-sharper  border-opacity-[15%] py-[25px]
        pl-[35px]  backdrop-blur-[4px] overflow-hidden
        font-visuelt shadow-3xl  place-items-start items-start justify-self-start h-screen
        backdrop-brightness-[80%] backdrop-contrast-[110%]"
    >
      <Header></Header>
      {/* <img
        src="0anim.svg"
        className=" z-0 bottom-[0px] absolute left-[-10px] rotate-[10%] scale-y-[140%] scale-x-[180%]  animate-pulse2 transform scale-[110%] brightness-[150%]"
        draggable="false"
      ></img> */}

      <div
        className={mergeClasses(
          "grid grid-flow-row gap-y-6 justify-self-start pr-[20px]",
          "w-full h-screen ",
          " overflow-y-scroll  scrollbar-thumb-fondy scrollbar-track-read scrollbar-thin"
        )}
      >
        <div
          className={mergeClasses(
            "grid grid-flow-row gap-y-8 justify-self-start pr-[20px] align-top content-start"
          )}
        >
          {/* 'overflow-y-scroll scrollbar scrollbar-thumb-darkerBrand scrollbar-track-brand scrollbar-thin', */}
          {/* <Post
          slug="guicurcio"
          title="guicurcio.com"
          date="2021-03-29"
          picture="/avatars/3.jpg"
        ></Post> */}
          {/* <Post
          slug="guicurcio"
          title="guicurcio.com"
          date="2021-03-29"
          picture="/avatars/3.jpg"
        ></Post> */}
          <Post
            slug="podsfy"
            title="podsfy.com"
            date="2021-03-29"
            picture="/avatars/d.png"
            excerpt="Podsfy is a podcast player that allows you to listen to your favorite podcasts, discover new ones, and keep track of your progress."
          ></Post>
          <Post
            slug="inventingonprinciple"
            title="inventingonprinciple.com"
            date="2021-03-29"
            picture="/avatars/2.jpg"
          ></Post>
          <Post
            slug="subjeto"
            title="subjeto.com"
            date="2021-03-29"
            picture="/avatars/3.jpg"
          ></Post>
        </div>
      </div>
      <SectionIntro title="selected projects and essays"></SectionIntro>
    </div>
  );
}
