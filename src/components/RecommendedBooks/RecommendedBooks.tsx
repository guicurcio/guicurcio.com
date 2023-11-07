import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the RecommendedBooks component.
 */
export interface RecommendedBooksProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
}

const BOOK_CLASSES = [
  "rounded-[1px] brightness-[80%] transition-all duration-500 ease-in-out hover:brightness-105 border-2 border-white/30 w-[600px] h-[200px]",
];

/**
 * RecommendedBooks Component
 */
export default function RecommendedBooks({
  className,
}: RecommendedBooksProps): JSX.Element {
  return (
    <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, className)}>
      <div className="grid grid-flow-row  place-content-around grid-rows-6 grid-cols-1 w-full">
        <div className="grid grid-flow-row  row-span-1 min-w-full col-span-1  place-content-end content-baseline">
          <h1 className="font-visuelt justify-end w-fit pt-[20px] pr-[18px] text-[#F2F2F2] text-[18px] font-normal leading-[24px]">
            My Library
          </h1>
        </div>
        <div className="grid-flow-row overflow-hidden relative gap-x-12  items-start place-content-baseline grid row-span-5 overflow-x-hidden">
          <div className="h-full py-[10px] ml-[0px]  overflow-hidden w-[1600px] grid grid-flow-col grid-rows-1 gap-4 whitespace-nowrap animate-marquee">
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/achop.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/cst.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/geb.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/fbr.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/l.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/ia.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/tboi.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/tbp.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/tis.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
            <Image
              className={mergeClasses(...BOOK_CLASSES)}
              src="/assets/u.jpg"
              alt="asd"
              width={600}
              height={200}
              quality={100}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

RecommendedBooks.displayName = "RecommendedBooks";
