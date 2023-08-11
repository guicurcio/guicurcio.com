import Avatar from "components/Avatar/Avatar";
import DateFormatter from "components/DateFormatter/DateFormatter";
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
    <Link
      className={mergeClasses(
        "grid grid-flow-row items-start cursor-pointer gap-y-0",
        "rounded-x-md rounded-b-md rounded-br-md rounded-bl-md",
        "pl-[10px] pt-[10px] pb-[20px]",
        "border-1  border-t-2 border-gray-800 bg-codeTitles bg-opacity-90",
        "shadow-sm backdrop-blur-3xl transition duration-700 ease-in hover:border-t-2  hover:border-x-gray-800  hover:border-t-colorLink",
        "h-fit w-full",
        status === "draft" && "cursor-not-allowed opacity-40 blur-[0.6px]"
      )}
      href={status === "draft" ? "/" : `/${slug}`}
    >
      <p className="text-white font-calibre text-opacity-40 text-[13px] h-fit">
        {date}
      </p>
      <div className="grid grid-flow-col gap-x-2  place-content-start h-fit ">
        <Avatar picture="/avatars/1.jpg" />
        <a className="text-left self-start justify-start justifese font-moderat text-[17px] font-normal lowercase tracking-[-0.070em] text-[#c9c9c9e0] text-opacity-75 antialiased shadow-none">
          the epistemic trinity
        </a>
      </div>
      <p className="grid h-fit  font-moderat text-xs text-sharp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit
        harum nisi recusandae aspernatur, quae nam, iste corporis error porro
        aliquid nulla accusantium maiores pariatur illum, at expedita quaerat
        enim?
      </p>
      {/* <ReadMore slug={slug}></ReadMore> */}
    </Link>
  );
}
