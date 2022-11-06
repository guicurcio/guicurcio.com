"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import NavigationMenu from "./NavigationMenu";

export function Logo() {
  return (
    <Link href="/">
      <h5 className="stroky cursor-pointer font-SpaceGrotesk text-[26px] lowercase opacity-100">
        <span className="font-normal  tracking-[-4px] text-sharper shadow-3xl">
          obtuso
        </span>
      </h5>
    </Link>
  );
}

export function Header() {
  return (
    <div
      className={twMerge(
        "fixed bottom-[10px] left-0 right-0 z-50  mx-auto w-[1100px]  max-w-[1100px] items-center justify-center bg-black bg-opacity-5 "
      )}
    >
      <div
        className={twMerge(
          " mx-auto w-[1100px] max-w-[1100px] rounded-[4px] bg-black bg-opacity-[25%] py-[1px]  backdrop-blur-[4px]",
          "items-center border border-sharp border-opacity-10"
        )}
      >
        <div
          className={twMerge(
            "mx-auto flex  w-[1100px] max-w-[1100px]  flex-row place-content-between items-center self-center px-[20px] align-middle"
          )}
        >
          <div className="relative flex flex-row">
            <Logo></Logo>
            <div className="absolute top-[14px] left-[72px] ml-4 h-[15px] w-[1px] bg-sharper bg-opacity-50" />
            <div className=" ml-10 flex flex-row space-x-[16px]">
              <NavigationMenu></NavigationMenu>
            </div>
          </div>
          {/* <div className="flex flex-row">
            <ul className="flex flex-row space-x-12 pl-[80px] font-moderat font-normal">
              <li className="relative top-[4px]">
                <Link href="/">
                  <motion.a
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="block py-1 font-medium text-white text-opacity-75 transition-colors duration-300 cursor-pointer top-1 font-visuelt hover:text-goldg"
                  >
                    Product
                  </motion.a>
                </Link>
              </li>
              <li className="relative top-[4px]">
                <Link href="/">
                  <motion.a
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="block py-1 font-medium transition-colors duration-300 cursor-pointer top-1 font-visuelt text-sharp hover:text-goldg"
                  >
                    Blog
                  </motion.a>
                </Link>
              </li>
              <li className="relative top-[4px]">
                <Link href="/">
                  <motion.a
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="block py-1 font-medium transition-colors duration-300 cursor-pointer top-1 font-visuelt text-sharp hover:text-goldg"
                  >
                    Pricing
                  </motion.a>
                </Link>
              </li>
              <li className="relative top-[4px]">
                <Link href="/">
                  <motion.a
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="block py-1 font-medium transition-colors duration-300 cursor-pointer top-1 font-visuelt text-sharp hover:text-goldg"
                  >
                    Docs
                  </motion.a>
                </Link>
              </li>
            </ul>
          </div> */}
          <AToLogin></AToLogin>
        </div>
      </div>
    </div>
  );
}

export function AToLogin() {
  return (
    <li className="relative top-[-7px]">
      <div className="flex ">
        <motion.button
          className={twMerge(
            // " bg-black bg-opacity-40 backdrop-blur-[8px] rounded-md text-[16px] font-visuelt",
            // "bg-black bg-opacity-20 backdrop-blur-[1px] rounded-md text-[16px] font-visuelt",
            "mx-6 font-visuelt text-[16px]",
            "hover:white-shadow tracking-[0.03rem] text-sharper  text-opacity-60  hover:text-opacity-100"
            // "hover:text-opacity-100 text-opacity-70 transition-all duration-500 hover:white-shadow border-[#fafafa08] border-[0.001px] text-sharp"
          )}
        >
          <span className="mr-1">Press</span>
          <span className="absolute top-[27.5px] mx-1 inline-flex h-4 w-4 self-center focus:translate-y-0 active:translate-y-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none">
              <g clipPath="url(#a)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M.327 1.638C0 2.28 0 3.12 0 4.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C2.28 16 3.12 16 4.8 16h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C16 13.72 16 12.88 16 11.2V4.8c0-1.68 0-2.52-.327-3.162A3 3 0 0 0 14.362.327C13.72 0 12.88 0 11.2 0H4.8C3.12 0 2.28 0 1.638.327A3 3 0 0 0 .327 1.638ZM4.124 12.4l3.36-8.596H8.52l3.36 8.596h-1.12l-.994-2.59H6.224l-.98 2.59h-1.12Zm5.264-3.556-1.4-3.668-1.4 3.668h2.8Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
          </span>{" "}
          <span className="ml-6">to login</span>
        </motion.button>
      </div>
    </li>
  );
}
