export const BLOGPOST_CLASSNAMES = [
  "grid grid-flow-col gap-0 self-start",
  "backdrop-blur-[5px] font-visuelt shadow-3xl relative backdrop-brightness-[55%] backdrop-contrast-[112%]",
  "overflow-y-scroll  scrollbar-thumb-fondy scrollbar-track-read scrollbar-thin",
  "transition-none duration-0 animate-none",
  "h-screen max-w-[800px] w-[800px] grid grid-flow-row gap-6",
  "border-sharper  border-opacity-10 py-[25px]",
  "bg-[#1E1E1E] bg-opacity-[95%]",
];

export const BORDER_POSTS_CLASSNAMES = ["col-span-1 grid grid-flow-col boxy"];

export const BLOGPOST_ANIMATION_VARIANTS = {
  initial: {
    opacity: 1,
    y: 0,
    x: 75,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  transition: {
    duration: 0.35,
  },
};
