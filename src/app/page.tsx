export const dynamic = "force-static";

import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

export default function Page() {
  return (
    <div className="w-full h-full px-[50px] pt-[30px] pb-[10px]">
      <div className="grid grid-flow-row grid-rows-2 gap-y-1 w-full h-full ">
        <div className="grid grid-flow-col grid-cols-12 row-span-1 gap-2 w-full h-full">
          <div className={mergeClasses("col-span-5 grid grid-flow-col")}>
            {/* <div className="px-[0px] pb-[20px] grid grid-flow-row gap-[1px] content-end">
              <h1 className="font-visue lt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit">
                Buenos Aires, Argentina
              </h1>
              <h1 className="text-[#F2F2F290] text-[16px] font-moderat leading-[22px] lg:w-[380px] h-fit">
                Resume and Work Experience
              </h1>
            </div> */}
          </div>
          <div
            className={mergeClasses(
              ...BORDER_POSTS_CLASSNAMES,
              "relative overflow-y-hidden col-span-4"
            )}
          >
            <img
              src="0anim.svg"
              className="z-0 bottom-[-180px] right-[10px] overflow-y-hidden  absolute  rotate-[50%] scale-y-[280%] scale-x-[350%] animate-pulse transform brightness-[70%]"
              draggable="false"
            ></img>
            <div className="grid grid-flow-row content-between">
              <div className="px-[25px] py-[20px] grid grid-flow-row gap-2 content-start">
                <h1 className="font-visuelt text-[#F2F2F2] text-[26px] font-normal leading-[24px] h-fit">
                  Guido Curcio
                </h1>
                <h1 className="text-[#F2F2F290] text-[16px] font-moderat leading-[22px] lg:w-[380px] h-fit">
                  I’m an engineer. <br></br> Rarely a writer, but always a
                  reader -- more of a listener than a talker.
                </h1>
              </div>
              <div className="px-[25px] pb-[20px] grid grid-flow-row gap-[1px] content-start">
                <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px] h-fit">
                  Senior Product Engineer
                </h1>
                <h1 className="text-[#F2F2F290] text-[16px] font-moderat leading-[22px] lg:w-[380px] h-fit">
                  Buenos Aires, Argentina
                </h1>
              </div>
            </div>
          </div>
          <div
            className={mergeClasses(
              ...BORDER_POSTS_CLASSNAMES,
              "col-span-3 grid grid-flow-row content-between px-[25px] py-[20px]"
            )}
          >
            <div className="px-[0px] pb-[20px] grid grid-flow-row gap-[1px] content-start ">
              <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                Interests
              </h1>
              <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                Product Engineering
              </h1>
              <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                Product Design
              </h1>
              <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                Gardening
              </h1>
              <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                Writing
              </h1>
              <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                Reading
              </h1>
              <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                Podcasts
              </h1>
            </div>
            <div className="grid grid-flow-col gap-[15px] content-end items-end pb-[10px] place-content-end pl-[15px]">
              <img
                src="assets/socials/github.svg"
                className="align-middle self-center"
                draggable="false"
              ></img>
              <img
                src="assets/socials/twitter.svg"
                className="align-middle self-center"
                draggable="false"
              ></img>
              <img
                src="assets/socials/linkedin.svg"
                className="align-middle self-center"
                draggable="false"
              ></img>
              <img
                src="assets/socials/youtube.svg"
                className="align-middle self-center"
                draggable="false"
              ></img>
              <img
                src="assets/socials/twitch.svg"
                className="align-middle self-center"
                draggable="false"
              ></img>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-12 row-span-1  gap-2 w-full h-full max-h-full max-w-full">
          <div
            className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "col-span-5")}
          >
            <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
              <div className="grid grid-flow-row  row-span-1 min-w-full col-span-1 ">
                <h1 className="font-visuelt  w-fit pt-[20px] pl-[18px] text-[#F2F2F270] text-[18px] font-normal leading-[24px]">
                  Projects - podsfy.com
                </h1>
              </div>
              <div className=" grid grid-flow-row  row-span-5 w-full  overflow-hidden ">
                <div className=" grid grid-flow-row gap-0 ">
                  <div className="grid grid-flow-row mx-auto gap-0 border-t border-l border-r border-[#333333] rounded-t-[4px]">
                    <div className="bg-[#191C1F]  bg-opacity-25 backdrop-blur-[3px] backdrop-brightness-[55%] rounded-t-[6px] px-3  grid grid-flow-col items-start place-items-start h-fit py-3">
                      <div className=" grid grid-flow-col items-start content-start gap-2 ">
                        <div className="rounded-full w-3 h-3  bg-[#EE6A5F] "></div>
                        <div className="rounded-full w-3 h-3 bg-[#F5BD4F] "></div>
                        <div className="rounded-full w-3 h-3  bg-[#61C454]"></div>
                      </div>
                      <div className="grid grid-flow-col items-start content-start gap-2 bg-[#0C0F12] px-20 border border-white border-opacity-10 rounded-[6px] justify-start self-baseline mt-[-5px]">
                        <h1 className="text-white font-mono text-[14px]">
                          podsfy.com
                        </h1>
                      </div>
                    </div>
                    <Image
                      className="w-[550px] h-[360px] mt-[-4px]"
                      src="/assets/websites/podsfy2.jpg"
                      alt="asd"
                      width={1920}
                      height={1780}
                      quality={100}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "col-span-4")}
          >
            <div className="grid grid-flow-row   grid-rows-6">
              <div className="grid grid-flow-row  row-span-1  place-content-end content-baseline">
                <h1 className="font-visuelt justify-end w-fit pt-[20px] pr-[18px] text-[#F2F2F2] text-[18px] font-normal leading-[24px]">
                  Engineering
                </h1>
              </div>

              <div className="grid   pl-[30px] pr-[80px] w-full  items-start relative row-span-4">
                <div className="absolute top-[-25px] right-[50px] z-20">
                  <Image
                    className="z-20 w-[60px] h-[60px]"
                    src="/assets/socials/github-logo-big.svg"
                    alt="asd"
                    width={74}
                    height={72}
                    quality={100}
                  ></Image>
                </div>
                <div className="z-10  grid w-full grid-flow-row rounded-[12px] border border-opacity-20 border-white backdrop-blur-[15px] bg-black bg-opacity-[10%] backdrop-brightness-[70%]   items-start px-[20px]">
                  <div className="grid grid-flow-col gap-[5px] pl-[0px] pt-[15px] items-start content-start place-content-start w-full">
                    <div className="rounded-full w-4 h-4 border border-white border-opacity-20"></div>
                    <div className="rounded-full w-4 h-4 border border-white border-opacity-20"></div>
                    <div className="rounded-full w-4 h-4 border border-white border-opacity-20"></div>
                  </div>
                  <div className="grid w-full grid-flow-row place-content-start pt-[20px] pb-[30px] ">
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      <span className="text-[#FF7B72]">$</span>{" "}
                      <span className="text-[#FF7B72]">git show</span> branch
                      delete beam fix-timestamps
                    </p>
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px] pt-[30px]">
                      <span className="text-[#FF7B72]">$</span>{" "}
                      <span className="text-[#FF7B72]">git show</span>
                    </p>
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      NAME PARENT PRODUCTION CREATED AT
                    </p>
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      ----- ----- --------- ----------
                    </p>
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      boilerplate typescript 2021-08-01 12:00:00
                    </p>
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      boilerplate typescript 2021-08-01 12:00:00
                    </p>
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      boilerplate typescript 2021-08-01 12:00:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid relative row-span-1 content-start items-start place-items-start place-content-start">
                <div className="grid grid-flow-row items-start pl-[20px]">
                  <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px]">
                    Product Engineering
                  </h1>
                  <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px]">
                    30 pieces
                  </h1>
                </div>
                <div className="grid grid-flow-row items-start overflow-hidden">
                  <div className="absolute bottom-0 right-0 z-50  bg-[#111213] border-t border-l border-[#30363D] rounded-tl-[8px]">
                    <div className="w-full pl-[6px] pt-[5px] grid grid-flow-col items-start content-start place-items-start place-content-start">
                      <div className="bg-[#08090A] rounded-t-[6px] w-fit h-fit border-t-0.5 border-white/10 px-[10px]">
                        <h1 className="font-mono text-[13px] font-medium text-white">
                          layout.tsx
                        </h1>
                      </div>
                      <div className="bg-[#08090A10] rounded-t-[6px] w-fit h-fit border-t-0.5 border-white/10 px-[10px]">
                        <h1 className="font-mono text-[13px] font-medium text-white">
                          app.tsx
                        </h1>
                      </div>
                    </div>
                    <div className="bg-[#0A0808] h-full w-full pl-[8px] pt-[4px]">
                      <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                        1 <span className="text-[#FF7B72]">import</span>{" "}
                        matplotlib.pyplot{" "}
                        <span className="text-[#FF7B72]">as</span> plt
                      </p>
                      <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                        2 <span className="text-[#FF7B72]">import</span>{" "}
                        matplotlib.pyplot{" "}
                        <span className="text-[#FF7B72]">as</span> plt
                      </p>
                      <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                        3
                      </p>
                      <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                        4
                      </p>
                      <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                        5
                      </p>
                      <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                        6
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "col-span-3")}
          >
            <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
              <div className="grid grid-flow-row  row-span-1 min-w-full col-span-1  place-content-end content-baseline">
                <h1 className="font-visuelt justify-end w-fit pt-[20px] pr-[18px] text-[#F2F2F2] text-[18px] font-normal leading-[24px]">
                  Reading
                </h1>
              </div>
              <div className="overflow-hidden grid-flow-row  items-start place-content-baseline grid row-span-5">
                <div className="h-full w-[800px] ml-[0px] grid grid-flow-col grid-rows-2 gap-4 animate-marquee">
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/achop.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/cst.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/geb.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/fbr.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/l.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/ia.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/tboi.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/tbp.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
                    src="/assets/tis.jpg"
                    alt="asd"
                    width={150}
                    height={180}
                    quality={100}
                  ></Image>
                  <Image
                    className="rounded-[8px] brightness-[80%] hover:brightness-105 border border-white/10 w-[150px] h-[180px]"
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
    </div>
  );
}
