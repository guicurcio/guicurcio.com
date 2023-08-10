import SectionIntro from "components/SectionIntro";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

/**
 * Represents a blog post, including details like title, date, content, and optional attributes such as picture and status.
 */
export interface PostProps {
  /**
   * The publication date of the post, typically in ISO 8601 format (e.g., "2023-08-10").
   */
  date: string;
  /**
   * Class names passed to the root element.
   */
  className?: string;
  /**
   * The title of the post.
   */
  title: string;

  /**
   * The URL-friendly version of the title, often used to create unique links (e.g., "my-blog-post").
   */
  slug: string;

  /**
   * A brief summary or preview of the post's content.
   */
  excerpt: string;

  /**
   * The URL of the main image for the post (optional).
   */
  picture?: string;

  /**
   * The full content of the post, usually in HTML or Markdown (optional).
   */
  content?: string;

  /**
   * The publication status of the post, such as "draft", "published", "archived", etc. (optional).
   */
  status?: string;

  /**
   * An object containing the author's name and profile URL (optional).
   */
  author?: {
    name: string;
    profileUrl: string;
  };

  /**
   * An array of tags associated with the post (optional).
   */
  tags?: string[];

  /**
   * An array of comments for the post (optional).
   */
  comments?: Comment[];
}

/**
 * Represents a comment on a blog post, including details like author, content, and date.
 */
export interface Comment {
  /**
   * Author's name or username.
   */
  author: string;

  /**
   * Content of the comment.
   */
  content: string;

  /**
   * Comment's date, typically in ISO 8601 format.
   */
  date: string;
}

/**
 * Post Component
 */
export default function Post({
  className,
  date,
  title,
  slug,
  excerpt,
  picture,
  content,
  status,
}: PostProps) {
  return (
    <div className={twMerge("", className)}>
      <Link
        href={
          status === "draft"
            ? "/"
            : `blog/${slug}`
        }
      >
        <div
          className={twMerge(
            "rounded-x-md border-1 flex h-[140px] cursor-pointer flex-col gap-y-1.5 rounded-b-md rounded-br-md rounded-bl-md border-t-2 border-gray-800 bg-codeTitles bg-opacity-90 px-3.5 pt-3 shadow-sm backdrop-blur-3xl transition duration-700 ease-in hover:border-t-2  hover:border-x-gray-800  hover:border-t-colorLink",
            status === "draft" &&
              "cursor-not-allowed opacity-40 blur-[0.6px] "
          )}
        >
          {/* <DateFormatter dateString={date} /> */}
          {/* <Title title={title} slug={slug} picture={picture} /> */}
          {/* <Description excerpt={excerpt} /> */}
          {/* <ReadMore slug={slug}></ReadMore> */}
        </div>
      </Link>
    </div>
  );
}
