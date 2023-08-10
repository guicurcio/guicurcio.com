import BlogComponent from "components/BlogComponent";
import BlogPostPreview from "components/BlogPostPreview/BlogPostPreview";
import Projects from "components/Projects";

export default function Page() {
  return (
    <div className="cursor-default relative select-none align-middle self-center">
      <div className="grid grid-flow-row">
        <div
          className="h-[201px] overflow-hidden rounded-[5px] 
        border-sharper  border-opacity-10  bg-[#101012] bg-opacity-[95%] backdrop-blur-[10px] font-visuelt shadow-3xl "
        >
          <img
            src="waves.svg"
            className="h-[267px] top-[-20px] absolute right-[58px] w-[1300px] z-50 animate-pulse2 transform scale-[110%] brightness-[150%]"
            draggable="false"
          ></img>
          <div className="w-[500px] h-[114px]">
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
        </div>
        <div className="grid grid-flow-col w-full">
          <Projects></Projects>
          <BlogComponent>
            <BlogPostPreview title="guicurcio.com">
              <p className="font-moderat text-[#868F97] text-[14px] leading-[18px] tracking-[-2%]">
                Welcome to this professional
                intersection of software
                engineering, product strategy, and
                design. As an experienced software
                engineer with a focus on product
                development and user-centric
                design, this blog serves as an
                academic and professional
                resource, offering insights that
                stem from years of practical and
                theoretical involvement in the
                field.
              </p>

              <p className="font-moderat text-[#868F97] text-[14px] leading-[18px] tracking-[-2%]">
                Here, you'll discover detailed
                analyses of system architectures,
                in-depth discussions on
                performance optimization, and
                application of the latest
                techniques in software
                development. The section on
                product strategy combines rigorous
                academic scrutiny and practical
                insights, while the design segment
                brings thoughtful discourse on
                user experience and design impacts
                on product success.
              </p>

              <p className="font-moderat text-[#868F97] text-[14px] leading-[18px] tracking-[-2%]">
                This space is crafted with
                professionals, academicians, and
                curious individuals in mind.
                Whether you're interested in a
                technical deep-dive, a data-driven
                exploration of product strategy,
                or an analytical dissection of
                design philosophy, there's a
                wealth of knowledge here for you.
              </p>

              <p className="font-moderat text-[#868F97] text-[14px] leading-[18px] tracking-[-2%]">
                I encourage you to explore the
                various sections of the blog, each
                designed to provoke thought and
                foster intellectual growth. Thank
                you for your visit, and I look
                forward to contributing to your
                journey of continuous learning in
                the dynamic landscape of
                technology.
              </p>
            </BlogPostPreview>
          </BlogComponent>
        </div>
      </div>
    </div>
  );
}
