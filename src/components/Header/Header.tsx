import Link from "next/link";
import mergeClasses from "utils/mergeClasses";

/**
 * Represents a blog Header, including details like title, date, content, and optional attributes such as picture and status.
 */
export interface HeaderProps {
  /**
   * The publication date of the Header, typically in ISO 8601 format (e.g., "2023-08-10").
   */
  date?: string;
  /**
   * Class names passed to the root element.
   */
  className?: string;
  /**
   * The title of the Header.
   */
  title?: string;

  /**
   * The URL-friendly version of the title, often used to create unique links (e.g., "my-blog-Header").
   */
  slug?: string;

  /**
   * A brief summary or preview of the Header's content.
   */
  excerpt?: string;

  /**
   * The URL of the main image for the Header (optional).
   */
  picture?: string;

  /**
   * The full content of the Header, usually in HTML or Markdown (optional).
   */
  content?: string;

  /**
   * The publication status of the Header, such as "draft", "published", "archived", etc. (optional).
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
   * An array of tags associated with the Header (optional).
   */
  tags?: string[];
}

/**
 * Header Component
 */
export default function Header({
  className,
  date,
  title,
  slug,
  excerpt,
  picture,
  content,
  status,
}: HeaderProps) {
  return (
    <Link
      className={mergeClasses(
        "grid grid-flow-col gap-4 items-center pb-2",
        "hover:backdrop-brightness-[110%] hover:backdrop-contrast-[320%] hover:bg-uber hover:cursor-pointer",
        "rounded-md",
        "pl-[10px] pr-[20px] pt-[10px] pb-[10px]",
        "hover:bg-codeTitles hover:bg-opacity-50",
        "shadow-sm backdrop-blur-3xl transition duration-150 ease-in-out"
      )}
      href={"/"}
    >
      <img
        src="https://guicurcio.com/assets/github-avatar.png"
        className="rounded-full w-[80px] h-[80px]"
      ></img>
      <div className="grid grid-flow-row">
        <h1 className="font-moderat text-white text-[22px]">Guido Curcio</h1>
        <p className="font-moderat text-white text-[14px] leading-[17.5px] tracking-[-12%] text-opacity-[60%] w-[290px]">
          I'm an engineer.<br></br>
          Rarely a writer, but always a reader -- more of a listener than a
          talker. <br></br>
        </p>
      </div>
    </Link>
  );
}
