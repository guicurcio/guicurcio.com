import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Hero = () => {
  return (
    <div className="pb-3 space-y-1 ">
      {/* from-coolPink to-coolPinkDimmed via-coolPurple */}
      <div className="flex flex-col select-none ">
        <motion.div>
          <div className="mx-auto w-fit ">
            <h1
              className={twMerge(
                `hero-grad2 stroky2 mt-[40px] cursor-default self-center  text-center align-middle`,
                // `font-Athletics text-[100px] font-normal lowercase leading-[80px] tracking-[-9.0px]`,
                `font-SpaceGrotesk text-[100px] font-normal lowercase leading-[86px] tracking-[-7.5px]`
              )}
            >
              se<span className="tracking-[-8.0px]">rv</span>erless{" "}
              <span className="uppercase">api</span> infrastructure
              <br></br> for the web
            </h1>
          </div>
          {/* <h1
            className={twMerge(
              `hero-grad2 leading-[60px]`,
              `mt-[40px] cursor-default self-center text-center font-moderat text-[22px]`,
              `mx-auto w-[620px] font-normal lowercase tracking-[-2.1px]`,
            )}
          >
            It's impossible as I write now, in middle age, to describe the
            turbulence caused in my adolescent heart by this first, however
            prejudiced and incomplete, account of Uncle Petros' story
          </h1> */}
        </motion.div>
      </div>
    </div>
  );
};
