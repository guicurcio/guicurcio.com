import { Soundy } from "components/SoundGrad";
import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <div className="max-w-[1300px] mx-auto cursor-default select-none align-middle self-center my-[100px]">
      <div className="relative h-[800px] overflow-hidden rounded-[15px] border border-sharper holder border-opacity-10  bg-black bg-opacity-[95%] backdrop-blur-[10px] font-visuelt shadow-3xl ">
        {/* <Soundy
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
        ></Soundy>{" "} */}
        <div className="relative h-[700px] "></div>
      </div>
    </div>
  );
}
