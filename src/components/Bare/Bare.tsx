import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Bare component.
 */
export interface BareProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  /**
   * Interest of the user.
   */
  interest?: string;
  /**
   * URL of the image
   */
  imageURL?: string;
}

/**
 * Bare Component
 */
export default function Bare({
  className,
  interest = " ",
  imageURL = "/assets/interests/coffee.png",
}: BareProps): JSX.Element {
  return (
    <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, "col-span-4")}>
      <div className="grid grid-flow-row place-content-around grid-rows-6 grid-cols-1 w-full">
        <div className="grid grid-flow-row  pt-[18px] px-[18px]   row-span-1  col-span-1 ">
          <h1 className="font-visuelt  w-fit align-middle  text-[#F2F2F270] text-[18px] font-normal leading-[24px]">
            Interest - {interest}
          </h1>
        </div>
        <div className="grid grid-flow-row  row-span-5 w-full  overflow-hidden ">
          <Image
            className={mergeClasses(
              "w-[450px] h-[310px] mt-[-4px] mx-auto brightness-[80%] rounded-[12px]"
            )}
            src={imageURL}
            alt="asd"
            width={1920}
            height={1080}
            quality={100}
          ></Image>
        </div>
      </div>
    </div>
  );
}

Bare.displayName = "Bare";
