"use client";

import BlogComponent from "components/BlogComponent";
import BlogPostPreview from "components/BlogPostPreview";
import PostTitle from "components/PostTitle/PostTitle";
import Text from "components/Text/Text";
import {
  BLOGPOST_CLASSNAMES,
  BORDER_POSTS_CLASSNAMES,
} from "constants/classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

export default function InventingOnPrinciplePage() {
  return (
    <div
      className={mergeClasses(
        ...BLOGPOST_CLASSNAMES,
        BORDER_POSTS_CLASSNAMES,
        "scrollbar-none"
      )}
    >
      <div className="grid grid-flow-row gap-8 h-full w-full place-content-between mx-auto pl-[30px] pr-[40px]">
        <Link href={"/"}>
          <img
            src="/assets/arrow.svg"
            className="scale-x-[-100%] align-start self-start mt-[-20px] cursor-pointer"
            draggable="false"
          ></img>
        </Link>
      </div>
    </div>
  );
}
