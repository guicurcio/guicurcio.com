import { BORDER_POSTS_CLASSNAMES } from "constants/classnames";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Links component.
 */
export interface LinksProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  // children: React.ReactNode | React.ReactNode[] | string;
}

/**
 * Links Component
 */
export default function Links({ className }: LinksProps): JSX.Element {
  return (
    <div
      className={mergeClasses(
        ...BORDER_POSTS_CLASSNAMES,
        "lg:col-span-3 col-span-12 grid grid-flow-row content-between px-[25px] py-[20px]"
      )}
    >
      <div className="px-[0px] pb-[20px] grid grid-flow-row gap-[1px] content-start ">
        <h1 className="font-visuelt text-[#ACACAF] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
          Interests
        </h1>
        <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
          Product Engineering
        </h1>
        <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
          Product Design
        </h1>
        <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
          Gardening
        </h1>
        <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
          Writing
        </h1>
        <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
          Reading
        </h1>
        <h1 className="font-visuelt text-[#F2F2F2] text-[18px] font-normal leading-[24px] h-fit justify-end self-end place-self-end">
          Podcasts
        </h1>
      </div>
      <div className="grid grid-flow-col gap-[15px] content-end items-end pb-[10px] place-content-end pl-[15px]">
        <a href="https://github.com/guicurcio" target="_blank">
          <img
            src="assets/socials/github.svg"
            className="align-middle self-center"
            draggable="false"
          ></img>
        </a>
        <a href="https://twitter.com/guicurcio" target="_blank">
          <img
            src="assets/socials/twitter.svg"
            className="align-middle self-center"
            draggable="false"
          ></img>
        </a>
        <a href="https://linkedin.com/guicurcio" target="_blank">
          <img
            src="assets/socials/linkedin.svg"
            className="align-middle self-center"
            draggable="false"
          ></img>
        </a>
        {/* <a href="https://youtube.com/guicurcio" target="_blank">
          <img
            src="assets/socials/youtube.svg"
            className="align-middle self-center"
            draggable="false"
          ></img>
        </a> */}
        {/* <a href="https://twitch.com/guicurcio" target="_blank">
          <img
            src="assets/socials/twitch.svg"
            className="align-middle self-center"
            draggable="false"
          ></img>
        </a> */}
      </div>
    </div>
  );
}

Links.displayName = "Links";
