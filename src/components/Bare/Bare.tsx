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
    <div className={mergeClasses(BORDER_POSTS_CLASSNAMES, "col-span-3 h-full")}>
      <div className="grid grid-flow-row place-content-around grid-rows-6 h-full grid-cols-1 w-full">
        <div className="grid grid-flow-row  row-span-6 w-full h-full relative overflow-y-hidden">
          <Image
            className={mergeClasses(
              "w-full h-full mt-[-4px] mx-auto brightness-[80%] rounded-[12px]",
              "border-sharper border border-opacity-10 rounded-b-[200000px]",
              "absolute top-[-50px]"
            )}
            src={imageURL}
            alt="asd"
            width={1920}
            height={1080}
            quality={100}
          ></Image>
          <div className="absolute bottom-0 w-full h-[55px] text-center  rounded-t place-self-end place-content-end items-end place-items-end">
            {" "}
            <div className="relative text-center w-full  h-full">
              <h1 className="text-white text-[25px] font-moderat  text-center left-1/3 right-1/3  absolute bottom-3 place-content-end self-baseline">
                {interest}
              </h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

Bare.displayName = "Bare";
