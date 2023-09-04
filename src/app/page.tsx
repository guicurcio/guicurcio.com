export const dynamic = "force-static";

import Header from "components/Header/Header";
import mergeClasses from "utils/mergeClasses";

export default function Page() {
  return (
    <div className="w-screen h-screen ">
      <div className="grid grid-flow-row  w-full h-full">
        <div className="grid grid-flow-col grid-cols-3 mx-[25px] mt-[25px] gap-1">
          <div className="col-span-1 ">
            <Header></Header>
          </div>
          <div
            className={mergeClasses(
              "col-span-1  border border-white/10 rounded-[5px]  backdrop-brightness-[80%] backdrop-contrast-[110%]",
              "backdrop-blur-[4px]  relative overflow-hidden"
            )}
          >
            <img
              src="0anim.svg"
              className="z-0 bottom-[0px] overflow-hidden absolute  rotate-[10%] scale-y-[180%] scale-x-[180%] animate-pulse2 transform brightness-[150%]"
              draggable="false"
            ></img>
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal lowercase tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              Biography
            </h1>
          </div>
          <div className="col-span-1  "></div>
        </div>
        <div className="grid grid-flow-col grid-cols-3 mx-[25px] mt-[6px] gap-1">
          <div
            className={mergeClasses(
              "col-span-1  border border-white/10 rounded-[5px]  backdrop-brightness-[80%] backdrop-contrast-[110%]",
              "backdrop-blur-[4px] shadow-3xl"
            )}
          >
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal lowercase tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              essays
            </h1>
          </div>
          <div
            className={mergeClasses(
              "col-span-1  border border-white/10 rounded-[5px] backdrop-brightness-[80%] backdrop-contrast-[110%]",
              "backdrop-blur-[4px] shadow-3xl"
            )}
          >
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal lowercase tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              projects
            </h1>
            {/* <img
              src={"podsfy-selection.png"}
              className="w-[250px] h-[205px] rounded-[6px] border-[1px] border-sharper border-opacity-[25%]"
            ></img> */}
          </div>
          <div
            className={mergeClasses(
              "col-span-1  border border-white/10 rounded-[5px] backdrop-brightness-[80%] backdrop-contrast-[110%]",
              "backdrop-blur-[8px] hover:backdrop-blur-[8px]",
              " transition duration-700 ease-in-out     hover:border-colorLink"
            )}
          >
            <h1 className="self-end absolute right-4 top-2 place-self-end justify-self-end justify-end font-moderat text-[21px] font-normal lowercase tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
              interests
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
