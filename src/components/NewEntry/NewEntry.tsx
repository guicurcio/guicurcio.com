import Text from "components/Text/Text";
import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import Image from "next/image";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the NewEntry component.
 */
export interface NewEntryProps {
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
 * NewEntry Component
 */
export default function NewEntry({
  className,
  interest = " ",
  imageURL = "/assets/interests/coffee.png",
}: NewEntryProps): JSX.Element {
  return (
    <div className={mergeClasses(...BORDER_POSTS_CLASSNAMES, className)}>
      <div className="grid grid-flow-row place-content-around grid-rows-6 h-full grid-cols-1 w-full">
        <div className="grid grid-flow-row  row-span-5 w-full h-full place-items-start py-[20px] pl-[50px] pr-[120px] space-y-6 relative overflow-y-hidden">
          <Text className="text-[18px]">
            I'm a seasoned product engineer and designer, born and residing in
            Buenos Aires. With a deep-rooted passion for crafting intuitive
            products, I effortlessly try to join the realms of product design
            with those of engineering -- bridging the gap between intuitive
            design aesthetics with technical precision.
          </Text>
          <Text className="text-[18px]">
            My approach is deeply collaborative, often working hand-in-hand with
            other designers and developers. I thrive in team environments,
            believing that the best solutions emerge from a diverse set of
            perspectives and collective brainstorming. My ability to communicate
            complex ideas with clarity is something I work on the daily to
            ensure projects are not only innovative but also efficiently
            executed.
          </Text>
          <Text className="text-[18px]">
            As a front-end specialist, I'm dedicated to creating products that
            feel intuitively right for users. I ensure every project I take on
            is both aesthetically pleasing and functionally robust. By
            collaborating with cross-functional teams and continuously iterating
            based on feedback, I strive to deliver solutions that address
            real-world challenges and enhance the overall user interaction.
          </Text>
          <Text className="text-[18px]">
            I continually seek new challenges, eager to keep exploring the space
            of products in product engineering.
          </Text>
        </div>
      </div>
    </div>
  );
}

NewEntry.displayName = "NewEntry";
