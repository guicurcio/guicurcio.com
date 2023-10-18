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

export default function PodsfyPage() {
  return (
    <div
      className={mergeClasses(...BLOGPOST_CLASSNAMES, BORDER_POSTS_CLASSNAMES)}
    >
      <div className="grid grid-flow-row gap-8 h-full w-full place-content-between mx-auto pl-[30px] pr-[40px]">
        <Link href={"/"}>
          <img
            src="/assets/arrow.svg"
            className="scale-x-[-100%] align-start self-start mt-[-20px] cursor-pointer"
            draggable="false"
          ></img>
        </Link>
        <div>
          <Image
            className="w-[550px] rounded  object-fill h-[360px] mx-auto mt-[-4px] brightness-[80%] transition-all duration-500 ease-in-out hover:brightness-105"
            src={"/assets/posts/ai-design.png"}
            alt="asd"
            width={1920}
            height={1080}
            quality={100}
          ></Image>
        </div>
        <PostTitle>
          A Symphony of Man and Machine: Parsing the Aesthetics of AI Design
        </PostTitle>
        <div className=" grid grid-flow-row gap-5 items-start mx-[25px] place-content-start">
          <Text>
            Have you ever paused to consider the haunting beauty of a Bach
            composition or the intricate patterns of a Van Gogh painting? Now,
            imagine a world where machines claim the title of the artist. A
            world where the gentle brush strokes and the subtle piano chords are
            not birthed from human hands and souls but from cold, calculating
            algorithms. We're on the cusp of such a world, and as we inch
            closer, there's a nagging question: In this AI-driven design utopia
            (or dystopia, depending on your perspective), what becomes of the
            human artist?
          </Text>
          <Text>
            Historically, designers were the masterminds – crafting, iterating,
            and refining. With AI entering the scene, they're more like
            conductors guiding an orchestra, setting the tone but not playing
            the instruments. And just like in music, the conductor's role is
            paramount. They're the gatekeepers of emotion, context, and nuance.
            Sure, an AI can generate a piece that's technically perfect, but can
            it capture the melancholy of a rainy evening or the joy of a
            summer's day? That's the human's domain.
          </Text>
          <Text>
            However, this isn't a straightforward "Humans good, AI bad"
            narrative. The waters are murky. With AI tools becoming a staple,
            we're entering a complex maze of originality and copyright. When an
            AI spews out a 'unique' design, who does it belong to? The lines are
            blurred, and the answers aren't clear-cut. It's reminiscent of
            philosophical debates about consciousness and identity, but with a
            modern, technological twist.
          </Text>
          <Text>
            Our education systems, the breeding grounds for the next da Vincis
            and Beethovens, are at a crossroads. The curriculum can't just
            glorify the past; it must embrace the future. Tomorrow's designers
            need to be versed in AI, ethics, and a new form of meta-design
            thinking. It's not just about using AI; it's about understanding its
            psyche, its strengths, and its glaring weaknesses.
          </Text>
          <Text>
            And businesses? Oh, they're in for a roller-coaster ride. The AI
            allure is tantalizing, promising hyper-personalization. But there's
            a fine line between personalization and alienation. It's one thing
            to cater to individual tastes, but what if those tastes are so niche
            that they isolate everyone else? It's a delicate balancing act, one
            that demands finesse.
          </Text>
          <Text>
            As we peer into the future, there's an inevitable marriage between
            human creativity and AI's brute force efficiency. But here's a
            thought: In this intertwined dance, it's the human touch, the raw
            emotion, the ineffable soul that breathes life into design. Machines
            might play the notes, but it's the humans who make the music.
          </Text>
        </div>
      </div>
    </div>
  );
}
