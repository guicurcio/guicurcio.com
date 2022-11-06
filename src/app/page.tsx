import { Soundy } from "components/SoundGrad";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <div className="pt-[80px] max-w-[1100px] mx-auto">
      <div className=" relative  h-[700px] overflow-hidden rounded-[5px] border border-sharper border-opacity-10  bg-editor bg-opacity-[80%] font-visuelt shadow-3xl ">
        <Soundy
          pathOpacity="0.4"
          strokeWidth={0.4}
          viewbox="0 0 800 800"
          className={twMerge(
            "h-[1200px] absolute w-[1400px] -translate-y-[100px] z-5 -translate-x-[200px] rotate-[-80deg] scale-y-[-1] opacity-[60%]",
            "scale-x-[-1] fill-none opacity-[100%] blur-[0px] brightness-[118%] contrast-[110%] hue-rotate-[50deg] saturate-[230%] sepia-[30%]"
          )}
        ></Soundy>{" "}
        <div className="relative h-[700px] bg-transparent font-visuelt backdrop-blur-[0.1px] backdrop-contrast-[100%] backdrop-brightness-[200%]">
          <h5 className="pt-[20px] text-center stroky cursor-pointer font-SpaceGrotesk text-[26px] lowercase opacity-100">
            <span className="font-normal  tracking-[-4px] text-sharper shadow-3xl">
              obtuso
            </span>
          </h5>
          <div className="tracking-[-3px] mt-[15px] leading-[80px] font-visuelt z-50 text-white text-opacity-[90%]">
            <p className="text-[70px] font-[400] text-center text-shadow z-50 ">
              <span>Website templates built</span>
              <br></br>
              <span> by powerful AI models</span>
            </p>
          </div>
          <div className="tracking-[-1px] text-[20px] text-sharper text-opacity-[100%] leading-[25px] w-[550px] text-center mx-auto pt-[10px] font-calibre">
            <p className="text-center ">
              A platform that clones websites and optimizes them with AI models,
              polish them with SEO features, enhances it with modern libraries
              and tweaks them for performance.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
}
