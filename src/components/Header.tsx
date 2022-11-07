"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import NavigationMenu from "./NavigationMenu";

export function Logo() {
  return (
    <Link href="/">
      <h5 className="stroky cursor-pointer text-center font-SpaceGrotesk text-[22px] lowercase opacity-100 relative">
        <span className="font-normal  tracking-[-2.5px] text-white  text-opacity-[85%] stroky shadow-3xl absolute top-[4px]">
          websitesdealer.com
        </span>
      </h5>
    </Link>
  );
}

export function Header() {
  return (
    <div
      className={twMerge(
        "fixed top-[25px] left-0 right-0 z-50  mx-auto w-[600px]  max-w-[600px] items-center justify-center bg-black bg-opacity-10"
      )}
    >
      <div
        className={twMerge(
          "h-[49px]  rounded-[4px] bg-black bg-opacity-[15%] py-[1px]  backdrop-blur-[4px]",
          "items-center border border-sharper border-opacity-10"
        )}
      >
        <div className={twMerge("mx-auto px-[10px] align-middle")}>
          <div className="relative flex flex-row mx-auto place-content-between">
            {/* <div className="text-center ">
              <Logo></Logo>
            </div> */}
            <NavigationMenu></NavigationMenu>
          </div>

          {/* <AToLogin></AToLogin> */}
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
