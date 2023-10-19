import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the CVEntryT component.
 */
export interface CVEntryTProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
  name?: string;
  /**
   * URL of the image
   */
  imageURL?: string;
  /**
   * The path or URL to navigate to.
   * @example
   * https://example.com/CVEntryT
   */
  URL?: string;
  imageClassname?: string;
}

/**
 * CVEntryT Component
 */
export default function CVEntryT({ className }: CVEntryTProps): JSX.Element {
  return (
    <div className={mergeClasses(className)}>
      <div className=" grid grid-flow-row">
        <h1 className="duration-2000 font-moderat  w-[500px] text-[32px] font-normal tracking-normal text-[rgba(201,201,201,0.75)] text-opacity-60 antialiased shadow-none transition-all">
          Technical Skills
        </h1>
        <h1 className="text-white font-visuelt text-[18px]">
          Technologies: <br></br>React.js, Next.js, GraphQL, Web Standards, CSS,
          Node.js, Tailwindcss.
        </h1>
        <h1 className="text-white font-visuelt text-[18px]">
          Programming Languages: <br></br>Typescript, Javascript, Rust, Python.
        </h1>
      </div>
    </div>
  );
}

CVEntryT.displayName = "CVEntryT";
