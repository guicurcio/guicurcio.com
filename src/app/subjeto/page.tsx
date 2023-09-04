"use client";

import BlogPostPreview from "components/BlogPostPreview";
import PostTitle from "components/PostTitle/PostTitle";
import Text from "components/Text/Text";
import {
  BLOGPOST_ANIMATION_VARIANTS,
  BLOGPOST_CLASSNAMES,
} from "constants/classnames";
import { motion } from "framer-motion";
import mergeClasses from "utils/mergeClasses";

export default function SubjetoPage() {
  return (
    <motion.div
      {...BLOGPOST_ANIMATION_VARIANTS}
      className={mergeClasses(...BLOGPOST_CLASSNAMES)}
    >
      <BlogPostPreview title="subjeto.com" imageURL="/avatars/3.jpg">
        <PostTitle>The AI Agents Landscape</PostTitle>

        <Text>
          The first to go are the customeer support. There are only going to be
          prompt engineers that fine tune this AI agents. AI agents that you can
          fine tune and speak with through an interface much similar to slack,
          discord, and so on. With different back0ends
        </Text>
      </BlogPostPreview>
    </motion.div>
  );
}
