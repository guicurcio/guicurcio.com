"use client";

import CVEntry from "components/CVEntry/CVEntry";
import CVEntryT from "components/CVEntryT/CVEntryT";
import Text from "components/Text/Text";
import {
  BLOGPOST_CLASSNAMES,
  BORDER_POSTS_CLASSNAMES,
} from "constants/classnames";
import Image from "next/image";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

export default function CVPage() {
  return (
    <div
      className={mergeClasses(
        ...BLOGPOST_CLASSNAMES,
        BORDER_POSTS_CLASSNAMES,
        "w-[1200px] max-w-[1200px]"
      )}
    >
      <div className="grid grid-flow-row gap-8 h-full w-full place-content-between mx-auto pl-[30px] pr-[40px]">
        <Link href={"/"}>
          <img
            src="assets/arrow.svg"
            className="scale-x-[-100%] align-start self-start cursor-pointer"
            draggable="false"
          ></img>
        </Link>
        <img
          src="0anim.svg"
          className="z-0 bottom-[-180px] right-[10px]   absolute  rotate-[50%] scale-y-[280%] scale-x-[350%] animate-pulse transform brightness-[90%]"
          draggable="false"
        ></img>
        <div className="grid grid-flow-col grid-cols-12 gap-16 mt-[50px]  px-[15px] ">
          <div className="grid col-span-12 ">
            <div className="space-y-6 grid grid-flow-row content-start items-start">
              <div className="space-y-6 grid grid-flow-row">
                <Text>
                  I'm a seasoned product engineer and designer, born and
                  residing in Buenos Aires. With a deep-rooted passion for
                  crafting intuitive products, I effortlessly try to join the
                  realms of product design with those of engineering -- bridging
                  the gap between intuitive design aesthetics with technical
                  precision.
                </Text>
                <Text>
                  My approach is deeply collaborative, often working
                  hand-in-hand with other designers and developers. I thrive in
                  team environments, believing that the best solutions emerge
                  from a diverse set of perspectives and collective
                  brainstorming. My ability to communicate complex ideas with
                  clarity is something I work on the daily to ensure projects
                  are not only innovative but also efficiently executed.
                </Text>
                <Text>
                  As a front-end specialist, I'm dedicated to creating products
                  that feel intuitively right for users. I ensure every project
                  I take on is both aesthetically pleasing and functionally
                  robust. By collaborating with cross-functional teams and
                  continuously iterating based on feedback, I strive to deliver
                  solutions that address real-world challenges and enhance the
                  overall user interaction.
                </Text>
                <Text>
                  I continually seek new challenges, eager to keep exploring the
                  space of products in product engineering.
                </Text>
              </div>
            </div>
            <div className="grid grid-flow-row mt-[20px] gap-y-5">
              <div>
                <h1 className="duration-2000 font-moderat  w-[500px] text-[32px] font-normal tracking-normal text-[rgba(201,201,201,0.75)] text-opacity-60 antialiased shadow-none transition-all">
                  Work Experience
                </h1>
                <div className="grid grid-flow-col mt-[10px] ">
                  <div className="bg-transparent w-fit h-fit rounded-[8px] cursor-pointer hover:border-[12px] border-[12px] border-transparent hover:bg-white transition-all duration-500 ease-in-out ">
                    <Image
                      className={mergeClasses(
                        "w-[186px] h-[132px] rounded-[8px]"
                      )}
                      src={"/assets/websites/sumias.png"}
                      alt="asd"
                      width={1920}
                      height={1780}
                      quality={100}
                    ></Image>
                    <div className="grid grid-flow-col  mt-1 gap-x-[-2px] self-start items-start content-start">
                      <h1 className="text-black font-visuelt tracking-[-0.1em] uppercase text-[18px] ">
                        Tech Lead
                      </h1>
                      <h1 className="text-black text-opacity-80 font-SpaceGrotesk tracking-[-1.9px] text-[18px]">
                        obtuso
                      </h1>
                    </div>
                  </div>
                  <div className="bg-transparent w-fit h-fit rounded-[8px] cursor-pointer hover:border-[12px] border-[12px] border-transparent hover:bg-white transition-all duration-500 ease-in-out ">
                    <Image
                      className={mergeClasses(
                        "w-[186px] h-[132px] rounded-[8px]"
                      )}
                      src={"/assets/posts/ai-design.png"}
                      alt="asd"
                      width={1920}
                      height={1780}
                      quality={100}
                    ></Image>
                    <h1 className="text-black font-visuelt tracking-[-0.1em] uppercase text-[18px] ">
                      Nhost
                    </h1>
                  </div>
                  <div className="bg-transparent w-fit h-fit rounded-[8px] cursor-pointer hover:border-[12px] border-[12px] border-transparent hover:bg-white transition-all duration-500 ease-in-out ">
                    <Image
                      className={mergeClasses(
                        "w-[186px] h-[132px] rounded-[8px]"
                      )}
                      src={"/assets/posts/ai-design.png"}
                      alt="asd"
                      width={1920}
                      height={1780}
                      quality={100}
                    ></Image>
                    <h1 className="text-black font-visuelt tracking-[-0.1em] uppercase text-[18px] ">
                      earlysquad
                    </h1>
                  </div>
                  <div className="bg-transparent w-fit h-fit rounded-[8px] cursor-pointer hover:border-[12px] border-[12px] border-transparent hover:bg-white transition-all duration-500 ease-in-out ">
                    <Image
                      className={mergeClasses(
                        "w-[186px] h-[132px] rounded-[8px]"
                      )}
                      src={"/assets/posts/ai-design.png"}
                      alt="asd"
                      width={1920}
                      height={1780}
                      quality={100}
                    ></Image>
                    <h1 className="text-black text-center font-visuelt tracking-[-0.1em] uppercase text-[18px] ">
                      Policia Federal <br></br>Argentina
                    </h1>
                  </div>
                </div>
              </div>
              <div className="grid grid-flow-col gap-4">
                <CVEntryT></CVEntryT>
                <CVEntry></CVEntry>
              </div>
            </div>
            <div className={mergeClasses(" text-fondy mt-[50px]")}>
              <div className="grid grid-flow-row content-end">
                <div className="grid grid-flow-row gap-[2px] content-end">
                  <h1 className="font-lausanne text-opacity-90 text-fondy text-[26px] font-normal leading-[24px] h-fit">
                    Guido Curcio
                  </h1>
                </div>
                <div className="grid grid-flow-row gap-[1px] content-start">
                  <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px] h-fit">
                    Senior Product Engineer
                  </h1>
                  <h1 className="text-[#F2F2F290] text-[16px] font-moderat leading-[22px] lg:w-[380px] h-fit">
                    Buenos Aires, Argentina
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
