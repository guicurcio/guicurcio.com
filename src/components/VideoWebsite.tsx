export interface VideoWebsiteProps {
  /**
   * The source of the video to play.
   */
  videoSRC: string;
}

export function VideoWebsite({ videoSRC }: VideoWebsiteProps) {
  return (
    <div className="w-[310px] h-[220px] rounded-3xl bg-black text-white border-sharper border border-opacity-25 shadow-3xl">
      <video
        loop
        muted
        width={310}
        height={250}
        className="w-[310px] h-[250px] rounded-3xl object-cover blur-[0.3px] brightness-[95%]"
        src={videoSRC}
      />
    </div>
  );
}
