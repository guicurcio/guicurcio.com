import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the EngineeringLibrary component.
 */
export interface EngineeringLibraryProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
}

/**
 * EngineeringLibrary Component
 */
export default function EngineeringLibrary({
  className,
}: EngineeringLibraryProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        ...BORDER_POSTS_CLASSNAMES,
        "hover:border border-collapse hover:border-1 transition-colors duration-700 ease-in-out",
        className
      )}
    >
      <div className="grid grid-flow-row   grid-rows-6">
        <div className="grid grid-flow-row  row-span-1  place-content-end content-baseline"></div>

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
                <span className="text-[#FF7B72]">git show</span> branch delete
                beam fix-timestamps
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
              Open Source Libraries
            </h1>
            <h1 className="font-visuelt text-[#ACACAF80] text-[18px] font-normal leading-[24px]">
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
                  matplotlib.pyplot <span className="text-[#FF7B72]">as</span>{" "}
                  plt
                </p>
                <p className="font-mono text-[#ACACAF] text-[14px] font-medium  leading-[22px] tracking-[-0.175px]">
                  2 <span className="text-[#FF7B72]">import</span>{" "}
                  matplotlib.pyplot <span className="text-[#FF7B72]">as</span>{" "}
                  plt
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
  );
}

EngineeringLibrary.displayName = "EngineeringLibrary";
