export const dynamic = "force-static";

import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

export default function Page() {
  return (
    <div className="w-full h-full px-[50px] pt-[30px] pb-[10px]">
      <div className="grid grid-flow-row grid-rows-2 gap-y-1 w-full h-full ">
        <div className="grid grid-flow-col grid-cols-3 row-span-1 gap-1 w-full h-full">
          <div className={mergeClasses("col-span-1 grid grid-flow-col")}>
            <div className="px-[0px] pb-[20px] grid grid-flow-row gap-[1px] content-end">
              <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit">
                Buenos Aires, Argentina
              </h1>
              <h1 className="text-[#F2F2F290] text-[16px] font-moderat leading-[22px] lg:w-[380px] h-fit">
                Resume and Work Experience
              </h1>
            </div>
          </div>
          <div
            className={mergeClasses(
              ...BORDER_POSTS_CLASSNAMES,
              "relative overflow-y-hidden "
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
                  Resume and Work Experience
                </h1>
              </div>
            </div>
          </div>
          <div
            className={mergeClasses(
              "col-span-1 grid grid-flow-row content-between"
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
                Agriculture
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
        <div className="grid grid-flow-col grid-cols-3 row-span-1  gap-[3px] w-full h-full max-h-full max-w-full">
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "")}>
            <div className="grid grid-flow-row items-start">
              <div className="items-end place-content-end pt-[20px] pl-[20px]">
                <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  Engineering
                </h1>
              </div>
              <div className="grid pl-[30px] pr-[50px] items-start">
                <div className="grid grid-flow-row rounded-[12px] border border-opacity-20 border-white lg:w-[500px h-[286px] items-start px-[20px]">
                  <div className="grid grid-flow-col gap-[5px] pl-[0px] pt-[15px] items-start content-start place-content-start">
                    <div className="rounded-full w-4 h-4 border border-white border-opacity-20"></div>
                    <div className="rounded-full w-4 h-4 border border-white border-opacity-20"></div>
                    <div className="rounded-full w-4 h-4 border border-white border-opacity-20"></div>
                  </div>
                  <div className="grid grid-flow-row place-content-start">
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      $ pscale branch delete beam fix-timestamps
                    </p>
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      $ pscale branch delete beam fix-timestamps
                    </p>
                    <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                      NAME              PARENT     PRODUCTION   CREATED AT
                      ----------------- ---------- ------------ ---------------
                      main              n/a        Yes          4 months ago
                      add-upvotes       main       No           1 minute ago
                      user-index        main       No           2 days ago
                      revert-comments   main       No           8 days ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="items-end place-content-end pt-[20px] pl-[20px]">
                <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  Product Engineering
                </h1>
                <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  30 pieces
                </h1>
              </div>
            </div>
          </div>
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES)}>
            <div className="grid grid-flow-row items-start">
              <div className="items-end place-content-end pt-[20px] pl-[20px]">
                <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  Design
                </h1>
              </div>
              <div></div>
              <div className="items-end place-content-end pt-[20px] pl-[20px]">
                <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  Product Design
                </h1>
                <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  5 Case Studies
                </h1>
              </div>
            </div>
          </div>
          <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES)}>
            <div className="grid grid-flow-row items-start">
              <div className="items-end place-content-end pt-[20px] pl-[20px]">
                <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  Reading & Writing
                </h1>
              </div>
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
              <div className="items-end place-content-end pt-[20px] pl-[20px]">
                <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  Product Design
                </h1>
                <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
                  5 Case Studies
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
