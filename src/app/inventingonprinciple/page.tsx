"use client";

import BlogComponent from "components/BlogComponent";
import PostTitle from "components/PostTitle/PostTitle";
import Text from "components/Text/Text";
import { motion } from "framer-motion";
import mergeClasses from "utils/mergeClasses";

export default function PodsfyPage() {
  return (
    <motion.div
      {...animVariants}
      className={mergeClasses(
        "grid grid-flow-col gap-0 self-start",
        "backdrop-blur-[3px] font-visuelt shadow-3xl relative backdrop-brightness-[75%] backdrop-contrast-[112%]",
        "overflow-y-scroll  scrollbar-thumb-fondy scrollbar-track-read scrollbar-thin",
        "transition-none duration-0 animate-none",
        "h-screen max-w-[800px] w-[800px] grid grid-flow-row gap-6",
        "border-sharper  border-opacity-10 py-[25px]",
        "pl-[20px]  bg-black bg-opacity-[95%]"
      )}
    >
      <BlogComponent title="inventingonprinciple.com">
        <PostTitle>Inventing on Principle</PostTitle>
        <Text>Creating user-facing, interactive experiences.</Text>
      </BlogComponent>
    </motion.div>
  );
}

const animVariants = {
  initial: {
    opacity: 1,
    y: 0,
    x: 75,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  transition: {
    duration: 0.35,
  },
};
