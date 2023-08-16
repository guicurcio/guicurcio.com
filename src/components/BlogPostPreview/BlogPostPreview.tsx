import PostTitle from "components/PostTitle/PostTitle";
import Text from "components/Text/Text";
import mergeClasses from "utils/mergeClasses";

/**
 * BlogPostPreview Props description
 */
export interface BlogPostPreviewProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Pass a custom title to the component.
   * @default ""
   */
  title?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  description?: string;
  /**
   * Pass a custom description to the component.
   * @default ""
   */
  date?: string;
}

/**
 * BlogPostPreview Component
 */
export default function BlogPostPreview({
  className,
  title,
  date,
}: BlogPostPreviewProps) {
  return (
    <div className="grid grid-flow-row gap-8  h-full w-full place-content-start mx-auto pl-[30px] pr-[40px]">
      <div className="grid grid-flow-row gap-5">
        <div className="grid grid-flow-col gap-2 ">
          <img
            src="podsfy-selection.png"
            className="w-[350px] h-[250px] rounded-[6px] mx-auto"
          ></img>
          {/* <h1 className="font-moderat text-center self-center mx-auto text-[#C9C9C9E0] text-opacity-[88%] text-[32px] leading-[22px] tracking[-3%] lowercase">
            {title}
          </h1> */}
        </div>
      </div>
      <div
        className=" grid grid-flow-row gap-5 items-start place-content-start  
"
      >
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
      </div>
    </div>
  );
}
