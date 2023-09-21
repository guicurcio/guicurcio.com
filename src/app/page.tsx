export const dynamic = "force-static";

import Post from "components/Post/Post";
import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import mergeClasses from "utils/mergeClasses";

export default function Page() {
  return (
    <div className="w-full h-full px-[100px] pt-[100px]">
      <div className="grid grid-flow-row gap-y-1 w-full h-full ">
        <div className="grid grid-flow-col grid-cols-3 row-span-4   gap-1 w-full h-full">
          <div
            className={mergeClasses(
              ...BORDER_POSTS_CLASSNAMES,
              "col-span-3 relative overflow-hidden "
            )}
          >
            <img
              src="0anim.svg"
              className="z-0 bottom-[0px] right-0 overflow-y-hidden  absolute  rotate-[10%] scale-y-[180%] scale-x-[180%] animate-pulse2 transform brightness-[150%]"
              draggable="false"
            ></img>
            <h1 className="self-end absolute left-6 top-6 place-self-end justify-self-end justify-end font-visuelt text-[22px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] uppercase text-opacity-75 antialiased shadow-none">
              Guido Curcio
            </h1>
            <div className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[18px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              <h1 className="font-basier text-[14px] text-[#c9c9c9e0] text-opacity-75 antialiased ">
                Twitter
              </h1>
              <h1 className="font-basier text-[14px] text-[#c9c9c9e0] text-opacity-75 antialiased ">
                GitHub
              </h1>
            </div>
            <h1 className="absolute left-6 w-[480px] bottom-4 font-moderat text-[15px] font-normal text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              Rarely a writer, but always a reader -- more of a listener than a
              talker. <br></br> This is the process. Every day sketches,
              brainfarts and ideas flying around in my backpack and apartment. I
              hope they can inspire or help someone out there.
            </h1>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-3 row-span-4   gap-1 w-full h-full">
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES)}>
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              essays
            </h1>
          </div>
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES)}>
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              projects
            </h1>
            <div className="grid"></div>
          </div>
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES)}>
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              interests
            </h1>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-3 row-span-3 gap-1">
          <div
            className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "col-span-2")}
          >
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              essays
            </h1>
          </div>
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES)}>
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              projects
            </h1>
            <div className="grid"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
