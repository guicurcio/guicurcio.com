import BlogComponent from "components/BlogComponent";
import Projects from "components/Projects";

export default function Page() {
  return (
    <div className="mx-auto cursor-default relative select-none align-middle self-center my-[50px]">
      <div className="grid grid-flow-row gap-y-14 max-w-[1800px] mx-auto">
        <div
          className="h-[201px] lg:w-[1822px] md:w-[600px]  mx-auto overflow-hidden rounded-[5px] border
        border-sharper  border-opacity-10  bg-black bg-opacity-[95%] backdrop-blur-[10px] font-visuelt shadow-3xl "
        >
          <img
            src="waves.svg"
            className="h-[267px] top-[-20px] absolute right-[58px] w-[1300px] z-50 animate-pulse2 transform scale-[110%] brightness-[150%]"
            draggable="false"
          ></img>
          <div className="w-[500px] h-[113px] my-[50px] mx-[50px]">
            <div className="grid grid-flow-col gap-4 items-center justify-center">
              <div className="">
                <img
                  src="https://guicurcio.com/assets/github-avatar.png"
                  className="rounded-full w-[80px] h-[80px]"
                ></img>
              </div>
              <div className="grid grid-flow-row gap-1">
                <h1 className="font-moderat text-white text-[22px]">
                  Guido Curcio
                </h1>
                <p className="font-moderat text-white text-[14px] leading-[17.5px] tracking-[-12%] text-opacity-[60%] w-[400px]">
                  I'm an engineer; rarely a writer, but always a reader.{" "}
                  <br></br>
                  Here, you will encounter the most recent projects I’ve worked
                  in. In the blog, most often, I write about inventing on
                  principle.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col gap-5">
          <Projects></Projects>
          <BlogComponent></BlogComponent>
        </div>
      </div>
    </div>
  );
}
