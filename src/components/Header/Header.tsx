import Avatar from "components/Avatar/Avatar";
import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

/**
 * Represents a blog post, including details like title, date, content, and optional attributes such as picture and status.
 */
export interface PostProps {
  /**
   * The publication date of the post, typically in ISO 8601 format (e.g., "2023-08-10").
   */
  date?: string;
  /**
   * Class names passed to the root element.
   */
  className?: string;
  /**
   * The title of the post.
   */
  title?: string;

  /**
   * The URL-friendly version of the title, often used to create unique links (e.g., "my-blog-post").
   */
  slug?: string;

  /**
   * A brief summary or preview of the post's content.
   */
  excerpt?: string;

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
    <div className={mergeClasses("", className)}>
      <Link
        href={
          status === "draft"
            ? "/"
            : `blog/${slug}`
        }
      >
        <div
          className={mergeClasses(
            "rounded-x-md border-1 flex h-[140px] cursor-pointer flex-col gap-y-1.5 rounded-b-md rounded-br-md rounded-bl-md border-t-2 border-gray-800 bg-codeTitles bg-opacity-90 px-3.5 pt-3 shadow-sm backdrop-blur-3xl transition duration-700 ease-in hover:border-t-2  hover:border-x-gray-800  hover:border-t-colorLink",
            status === "draft" &&
              "cursor-not-allowed opacity-40 blur-[0.6px] "
          )}
        >
          {/* <DateFormatter dateString={date} /> */}
          <div className="flex flex-row space-x-1.5">
            <Avatar
              // picture="podsfy-selection.png
            />
            <a className="top-1 self-center py-0.5 font-moderat text-[17px] font-normal lowercase tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
            the epistemic trinity
            </a>
          </div>
          {/* <Title title={title} slug={slug} picture={picture} /> */}
          {/* <Description excerpt={excerpt} /> */}
          {/* <ReadMore slug={slug}></ReadMore> */}
        </div>
      </Link>
    </div>
  );
}
