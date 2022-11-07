import { twMerge } from "tailwind-merge";

export interface VideoWebsiteProps {
  /**
   * The source of the video to play.
   */
  videoSRC: string;
  /**
   * The website domain name.
   * @example "imdb.com"
   */
  websiteDomain?: string;
}

export function VideoWebsite({
  videoSRC,
  websiteDomain = "...",
}: VideoWebsiteProps) {
  return (
    <div
      className={twMerge(
        "w-[310px] h-[220px] rounded-3xl text-white hover:bg-opacity-10",
        "border-sharper border border-opacity-25 shadow-3xl",
        "backdrop-blur-[4px] border border-sharper border-opacity-10",
        "relative items-center justify-center group/vid"
      )}
    >
      <div
        className="absolute z-50 w-full h-full text-center opacity-0 group-hover/vid:opacity-100 
          transition-all duration-[1000ms] ease-in-out"
      >
        <h1 className="tracking-[-2.5px] font-moderat text-[30px] lowercase my-[100px] hero-grad3 stroky bg-white">
          {websiteDomain}
        </h1>
      </div>
      <video
        loop
        muted
        width={310}
        height={250}
        className={twMerge(
          "w-[310px] h-[250px] rounded-3xl object-cover blur-[0.2px] ",
          //   "w-[310px] h-[250px] rounded-3xl object-cover ",
          //   "brightness-[35%] blur-[2px]",
          "transition-all duration-[800ms] ease-in-out",
          "group-hover/vid:brightness-[35%] group-hover/vid:blur-[2px]"
        )}
        src={videoSRC}
      />
    </div>
  );
}
