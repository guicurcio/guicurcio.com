export const dynamic = "force-static";

import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

export default function Page() {
  return (
    <div className="w-full h-full px-[50px] pt-[30px] pb-[10px]">
      <div className="grid grid-flow-row grid-rows-2 gap-y-1 w-full h-full ">
        <div className="grid grid-flow-col grid-cols-3 row-span-1 gap-1 w-full h-full">
          <div
            className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "invisible")}
          ></div>
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "relative")}>
            <img
              src="0anim.svg"
              className="z-0 bottom-[-180px] right-[10px] overflow-y-hidden  absolute  rotate-[50%] scale-y-[280%] scale-x-[350%] animate-pulse transform brightness-[70%]"
              draggable="false"
            ></img>
            <h1 className="self-end absolute left-6 top-6 place-self-end justify-self-end justify-end font-visuelt text-[22px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] uppercase text-opacity-75 antialiased shadow-none">
              Guido Curcio
            </h1>
            <h1 className="absolute left-6 w-[480px] bottom-4 font-moderat text-[15px] font-normal text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              Rarely a writer, but always a reader -- more of a listener than a
              talker. <br></br> This is the process. Every day sketches,
              brainfarts and ideas flying around in my backpack and apartment. I
              hope they can inspire or help someone out there.
            </h1>
          </div>
          <div
            className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "invisible")}
          ></div>
        </div>
        <div className="grid grid-flow-col grid-cols-3 row-span-1  gap-[3px] w-full h-full max-h-full max-w-full">
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "")}>
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              work experience
            </h1>
            <div className="self-start absolute left-4 bottom-2 place-self-start justify-self-start justify-start antialiased shadow-none">
              <h2 className="text-[16px] font-basier font-normal text-white/80  tracking-[-0.05em] ">
                design and engineer work
              </h2>
              <p>Design and Engineer Work</p>
            </div>

            <div className="">
              <div className="h-fit w-fit ml-[0px] mt-[120px] grid grid-flow-col">
                <Image
                  className="rounded-[8px] border border-white/0 w-[130px] h-[210px]"
                  src="/assets/cell.png"
                  alt="asd"
                  width={130}
                  height={210}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-r-[8px] border border-white/0"
                  src="/assets/desktop.png"
                  alt="asd"
                  width={250}
                  height={200}
                ></Image>
              </div>
            </div>
          </div>
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES)}>
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              essays
            </h1>
            <div className="h-fit w-fit ml-[0px] mt-[120px] grid grid-flow-col">
              <img
                className="rounded-r-[8px] border border-white/0"
                src="https://intelligence.org/files/LogicalInductionSmall.png"
                alt="asd"
                width={150}
                height={70}
              ></img>
            </div>
          </div>
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES)}>
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal  tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none ">
              personal library
            </h1>
            <div className="overflow-hidden">
              <div className="h-full w-[1500px] ml-[0px] mt-[150px] grid grid-flow-col gap-4 animate-marquee overflow-hidden">
                <Image
                  className="rounded-[8px] border border-white/10 w-[150px] h-[180px]"
                  src="/assets/achop.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/cst.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/geb.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/fbr.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/l.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/ia.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/tboi.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/tbp.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/tis.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
                <Image
                  className="rounded-[8px] border border-white/0 w-[150px] h-[180px]"
                  src="/assets/u.jpg"
                  alt="asd"
                  width={150}
                  height={180}
                  quality={100}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
