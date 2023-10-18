"use client";

import PostTitle from "components/PostTitle/PostTitle";
import Text from "components/Text/Text";
import {
  BLOGPOST_CLASSNAMES,
  BORDER_POSTS_CLASSNAMES,
} from "constants/classnames";
import Image from "next/image";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

export default function CVPage() {
  return (
    <div
      className={mergeClasses(...BLOGPOST_CLASSNAMES, BORDER_POSTS_CLASSNAMES)}
    >
      <div className="grid grid-flow-row gap-8 h-full w-full place-content-between mx-auto pl-[30px] pr-[40px]">
        <Link href={"/"}>
          <img
            src="assets/arrow.svg"
            className="scale-x-[-100%] align-start self-start mt-[-20px] cursor-pointer"
            draggable="false"
          ></img>
        </Link>
        <div className="grid grid-flow-row mx-auto gap-0 border-t border-l border-r border-[#333333] rounded-t-[4px]">
          <div className="bg-[#191C1F]  bg-opacity-25 backdrop-blur-[3px] backdrop-brightness-[55%] rounded-t-[6px] px-3  grid grid-flow-col items-start place-items-start h-fit py-3">
            <div className=" grid grid-flow-col items-start content-start gap-2 ">
              <div className="rounded-full w-3 h-3  bg-[#EE6A5F] "></div>
              <div className="rounded-full w-3 h-3 bg-[#F5BD4F] "></div>
              <div className="rounded-full w-3 h-3  bg-[#61C454]"></div>
            </div>
            <div className="grid grid-flow-col items-start content-start gap-1 bg-[#0C0F12] px-20 border border-white border-opacity-10 rounded-[6px] justify-start self-baseline mt-[-5px]">
              <img
                src="assets/lock.svg"
                className="z-0 brightness-75 self-center align-middle w-3 h-3"
                draggable="false"
              ></img>
              <a
                className="text-white font-mono text-[14px] cursor-pointer"
                href="http://podsfy.com"
              >
                podsfy.com
              </a>
            </div>
          </div>
          <Image
            className="w-[550px] object-fill h-[360px] mt-[-4px] brightness-[80%] transition-all duration-500 ease-in-out hover:brightness-105"
            src={"/podsfy-selection.png"}
            alt="asd"
            width={1920}
            height={1080}
            quality={100}
          ></Image>
        </div>
        <div className=" grid grid-flow-row gap-5 items-start place-content-start">
          <Text>
            In today's rapidly growing podcast ecosystem, it's clear we need
            more than just a traditional platform. We need something that truly
            understands podcast lovers and creators. Let me introduce Podsfy,
            our answer to a multitude of podcasting challenges.
          </Text>
          <PostTitle>A Podcast Database Powerhouse</PostTitle>
          <Text>
            Imagine harnessing the power of distributed SQLite databases across
            various regions to create a seamless experience. The most famous
            podcasts get their pages built at build-time, meaning less frequency
            of updates and more optimization. This allows us to have quick
            access to the latest episodes while keeping the service highly
            responsive.
          </Text>

          <PostTitle>Dynamic Rendering & Customization</PostTitle>
          <Text>
            Why stop at build-time? With dynamic rendering for different
            podcasts, we're not only saving pages but also personalizing them.
            This opens doors for curated and personalized content, adding layers
            of depth and engagement that haven't been explored before. User
            Profiles Podsfy offers extensive user profiles, allowing podcast
            enthusiasts to express themselves creatively. Whether it's sharing
            favorite books, movies, or social media links, we provide a platform
            that feels personal and connected.
          </Text>
          <PostTitle>User Profiles</PostTitle>
          <Text>
            Podsfy offers extensive user profiles, allowing podcast enthusiasts
            to express themselves creatively. Whether it's sharing favorite
            books, movies, or social media links, we provide a platform that
            feels personal and connected.
          </Text>
          <PostTitle>Algorithmic Curation & Community Building</PostTitle>

          <Text>
            Podsfy leverages algorithmic content curation to build a feedback
            loop that refines user interests, driving constant novelty and
            variety. This creates a community where likes, comments, and shares
            become more than social features; they are pathways to validation
            and positive reinforcement.
          </Text>
          <PostTitle>Future Potential</PostTitle>
          <Text>
            We're looking into ideas such as Podsfy awards, 60-second clips, and
            more. From rapid scrolling to ephemerally curated content that
            disappears after a certain time, the possibilities are endless.
          </Text>
          <PostTitle>Why Podsfy?</PostTitle>
          <Text>
            Traditional platforms might ask: why can't this be done at
            build-time? The answer lies in flexibility, novelty, and engagement.
            Podsfy combines the stability of a well-structured database with the
            dynamism of on-demand rendering.
          </Text>
          <Text>
            The architecture we've implemented, combined with the
            community-focused features like personalized profiles, watchlists,
            and social validation, makes Podsfy more than just a platform. It's
            a new era in podcasting, bridging the gap between content and
            interaction.
          </Text>
          <Text>
            As we move forward, our roadmap includes exploration, lists,
            notifications, and profile enhancements. Stay tuned as we navigate
            the evolving world of podcasts, leading the way with innovation,
            community, and creativity.
          </Text>
        </div>
      </div>
    </div>
  );
}
