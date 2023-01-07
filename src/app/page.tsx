import { Soundy } from "components/SoundGrad";
import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <div className="pt-[50px] max-w-[1300px] mx-auto">
      <div className="relative h-[800px] overflow-hidden rounded-[5px] border border-sharper border-opacity-10  bg-black bg-opacity-[95%] backdrop-blur-[10px] font-visuelt shadow-3xl shadow-[#6d432452] ">
        <Soundy
          pathOpacity="0.4"
          strokeWidth={0.5}
          viewbox="0 0 800 800"
          className={twMerge(
            "h-[1200px] absolute w-[1300px] -translate-y-[100px] z-5 -translate-x-[200px] rotate-[-80deg] scale-y-[-1] ",
            "scale-x-[-1] fill-none opacity-[100%] blur-[0px] brightness-[98%] contrast-[110%] hue-rotate-[-310deg] saturate-[110%] sepia-[20%]"
          )}
        ></Soundy>{" "}
        <Soundy
          pathOpacity="0.4"
          strokeWidth={0.5}
          viewbox="0 0 800 800"
          className={twMerge(
            "h-[1200px] absolute w-[1300px] translate-y-[108px] z-5 translate-x-[981px] rotate-[-80deg] scale-y-[1] ",
            "scale-x-[-1] fill-none opacity-[100%] blur-[0px] brightness-[58%] contrast-[110%] hue-rotate-[-310deg] saturate-[110%] sepia-[20%]"
          )}
        ></Soundy>{" "}
        <div className="relative h-[700px] font-visuelt ">
          <h5 className="pt-[20px] text-center stroky cursor-pointer font-SpaceGrotesk text-[24px] lowercase opacity-100">
            <span className="font-normal  tracking-[-3px] text-sharper text-opacity-[95%] shadow-2xl">
              obtuso.com
            </span>
          </h5>
          <div className="tracking-[-4px] mt-[35px] leading-[80px] font-visuelt z-50 text-white   stroky hero-grad2">
            <p className="text-[80px] font-[400] text-center text-shadow z-50 hero-grad text-opacity-[105%] ">
              <span className="">Serverless API infrastructure</span>
              <br></br>
              <span className="">for the web</span>
            </p>
          </div>
          <div className="tracking-[-1px] text-[18px] text-sharper text-opacity-[100%] leading-[20px] w-[420px] text-center mx-auto pt-[20px] font-calibre">
            <p className="text-center ">
              A platform that gives you deployment to the edge, code-generation,
              one-off pages and websites, tracking, events, crons, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
