"use client";

import BlogComponent from "components/BlogComponent";
import BlogPostPreview from "components/BlogPostPreview";
import PostTitle from "components/PostTitle/PostTitle";
import Text from "components/Text/Text";
import { BLOGPOST_CLASSNAMES } from "constants/classnames";
import { motion } from "framer-motion";
import mergeClasses from "utils/mergeClasses";

export default function InventingOnPrinciplePage() {
  return (
    <motion.div
      {...animVariants}
      className={mergeClasses(...BLOGPOST_CLASSNAMES)}
    >
      <BlogPostPreview
        title="inventingonprinciple.com"
        imageURL="/avatars/2.jpg"
      >
        <PostTitle>The Guiding Principle</PostTitle>

        <Text>
          Bret Victor introduces the concept of having a guiding principle that
          directs one's work and creativity. This principle is a personal motto
          or belief that drives an individual's inventions and innovations. For
          Victor himself, the principle is that "creators need an immediate
          connection to what they create."
        </Text>

        <PostTitle>The Immediate Feedback Principle</PostTitle>
        <Text>
          Victor emphasizes the importance of immediate feedback in the creative
          process. He demonstrates this through live coding examples where
          changes in the code are instantly reflected in the output. This
          real-time connection between creation and result fosters a deeper
          understanding and a more intuitive and efficient workflow.
        </Text>
        <PostTitle>Tools and Environments</PostTitle>
        <Text>
          The talk explores the design of tools and environments that enable
          creators to see and understand their work dynamically. Victor
          showcases various prototypes and tools he has developed that allow for
          this immediate connection, such as a system for drawing dynamic
          animations and a tool for exploring algorithms visually.
        </Text>
        <Text>
          The talk serves as both an inspiration and a challenge to designers,
          programmers, and creators in various fields. Victor encourages the
          audience to find their guiding principle and to pursue work that
          resonates with that principle. He challenges conventional thinking and
          promotes a more responsive and humane approach to technology and
          design.
        </Text>
        <Text>
          "Inventing on Principle" is more than just a talk about programming or
          design; it's a philosophy that encourages a mindful and principled
          approach to creation. It has had a significant impact on how people
          think about the relationship between the creator and the creation, and
          it continues to inspire new ways of thinking about design, technology,
          and innovation.
        </Text>
      </BlogPostPreview>
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
