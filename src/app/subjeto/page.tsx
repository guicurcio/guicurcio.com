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
          Bret Victor introduces the concept of having a guiding principle that
          directs one's work and creativity. This principle is a personal motto
          or belief that drives an individual's inventions and innovations. For
          Victor himself, the principle is that "creators need an immediate
          connection to what they create."
        </Text>
      </BlogPostPreview>
    </motion.div>
  );
}
