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
      <BlogComponent title="podsfy.com">
        <Text>
          In today's rapidly growing podcast ecosystem, it's clear we need more
          than just a traditional platform. We need something that truly
          understands podcast lovers and creators. Let me introduce Podsfy, our
          answer to a multitude of podcasting challenges.
        </Text>
        <PostTitle>A Podcast Database Powerhouse</PostTitle>
        <Text>
          Imagine harnessing the power of distributed SQLite databases across
          various regions to create a seamless experience. The most famous
          podcasts get their pages built at build-time, meaning less frequency
          of updates and more optimization. This allows us to have quick access
          to the latest episodes while keeping the service highly responsive.
        </Text>

        <PostTitle>Dynamic Rendering & Customization</PostTitle>
        <Text>
          Why stop at build-time? With dynamic rendering for different podcasts,
          we're not only saving pages but also personalizing them. This opens
          doors for curated and personalized content, adding layers of depth and
          engagement that haven't been explored before. User Profiles Podsfy
          offers extensive user profiles, allowing podcast enthusiasts to
          express themselves creatively. Whether it's sharing favorite books,
          movies, or social media links, we provide a platform that feels
          personal and connected.
        </Text>
        <PostTitle>User Profiles</PostTitle>
        <Text>
          Podsfy offers extensive user profiles, allowing podcast enthusiasts to
          express themselves creatively. Whether it's sharing favorite books,
          movies, or social media links, we provide a platform that feels
          personal and connected.
        </Text>
        <PostTitle>Algorithmic Curation & Community Building</PostTitle>

        <Text>
          Podsfy leverages algorithmic content curation to build a feedback loop
          that refines user interests, driving constant novelty and variety.
          This creates a community where likes, comments, and shares become more
          than social features; they are pathways to validation and positive
          reinforcement.
        </Text>
        <PostTitle>Future Potential</PostTitle>
        <Text>
          We're looking into ideas such as Podsfy awards, 60-second clips, and
          more. From rapid scrolling to ephemerally curated content that
          disappears after a certain time, the possibilities are endless.
        </Text>
        <PostTitle>Why Podsfy?</PostTitle>
        <Text>
          Traditional platforms might ask: why can't this be done at build-time?
          The answer lies in flexibility, novelty, and engagement. Podsfy
          combines the stability of a well-structured database with the dynamism
          of on-demand rendering.
        </Text>
        <Text>
          The architecture we've implemented, combined with the
          community-focused features like personalized profiles, watchlists, and
          social validation, makes Podsfy more than just a platform. It's a new
          era in podcasting, bridging the gap between content and interaction.
        </Text>
        <Text>
          As we move forward, our roadmap includes exploration, lists,
          notifications, and profile enhancements. Stay tuned as we navigate the
          evolving world of podcasts, leading the way with innovation,
          community, and creativity.
        </Text>
      </BlogComponent>
    </motion.div>
  );
}
