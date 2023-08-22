"use client";

import BlogComponent from "components/BlogComponent";
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
      <BlogComponent title="subjeto.com">
        <PostTitle>subjeto.com</PostTitle>
        <Text>...</Text>
      </BlogComponent>
    </motion.div>
  );
}
