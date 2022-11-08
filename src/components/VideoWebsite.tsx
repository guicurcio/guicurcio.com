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
        "w-[310px] h-[252px] rounded-3xl text-white hover:bg-opacity-10",
        "border-sharper border border-opacity-20 shadow-3xl",
        "backdrop-blur-[4px] border border-sharper border-opacity-25",
        "relative items-center justify-center group/vid"
      )}
    >
      <div
        className="absolute z-50 w-full h-full text-center opacity-0 group-hover/vid:opacity-100 
          transition-all duration-[1000ms] ease-in-out"
      >
        <svg
          width={64}
          height={32}
          viewBox="0 0 64 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-16 h-8 my-[100px] mx-auto cursor-pointer"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_1_13)">
            <path
              d="M60 0H4C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H60C62.2091 32 64 30.2091 64 28V4C64 1.79086 62.2091 0 60 0Z"
              fill="#F5C518"
            />
            <path d="M8 25H13V7H8V25Z" fill="black" />
            <path
              d="M23.6725 7L22.5535 15.4085L21.8582 10.835C21.6566 9.37009 21.4632 8.09175 21.2781 7H15V25H19.2416L19.2581 13.1138L21.0436 25H24.0634L25.7584 12.8518L25.7707 25H30V7H23.6725Z"
              fill="black"
            />
            <path
              d="M32 25V7H39.8046C41.5694 7 43 8.41994 43 10.1766V21.8234C43 23.5778 41.5717 25 39.8046 25H32ZM37.8322 10.2395C37.6339 10.1323 37.2545 10.0807 36.7027 10.0807V21.8915C37.4313 21.8915 37.8797 21.7605 38.0478 21.4865C38.216 21.2166 38.3022 20.4861 38.3022 19.2872V12.3079C38.3022 11.494 38.272 10.974 38.216 10.7437C38.1599 10.5135 38.0349 10.3467 37.8322 10.2395Z"
              fill="black"
            />
            <path
              d="M52.4299 11.5069H52.7495C54.5447 11.5069 56 12.9127 56 14.6449V21.862C56 23.5951 54.5452 25 52.7495 25H52.4299C51.3315 25 50.3603 24.4737 49.7719 23.6683L49.4839 24.7688H45V7H49.7843V12.7805C50.4025 12.0102 51.3552 11.5069 52.4299 11.5069ZM51.4056 20.2842V16.0191C51.4056 15.3143 51.3603 14.8519 51.2661 14.639C51.1718 14.4261 50.7956 14.2894 50.5317 14.2894C50.2678 14.2894 49.8608 14.4005 49.7816 14.5877V16.0191V20.4208V21.8075C49.8721 22.013 50.2602 22.1274 50.5317 22.1274C50.8031 22.1274 51.1982 22.0167 51.2812 21.8075C51.3641 21.5983 51.4056 21.0881 51.4056 20.2842Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_13">
              <rect width={64} height={32} fill="white" />
            </clipPath>
          </defs>
        </svg>
        {/* <h1 className="tracking-[-2.5px] font-moderat text-[30px] lowercase my-[100px] hero-grad3 stroky bg-white">
          {websiteDomain}
        </h1> */}
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
