import { Footer } from "components/Footer";
import { Hero } from "components/Hero";
import { Soundy } from "components/SoundGrad";
import { VideoWebsite } from "components/VideoWebsite";
import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <div className="mx-auto overflow-hidden">
      <div className="mx-auto">
        <div className=" h-[1500px] max-w-[1200px] mx-auto w-[1200px] overflow-hidden rounded-[5px] border-r border-l border-sharper border-opacity-5  bg-fondy bg-opacity-[80%] relative ">
          <Soundy
            pathOpacity="0.5"
            strokeWidth={0.5}
            viewbox="0 0 800 800"
            className={twMerge(
              "h-[1500px] w-[2100px] -translate-y-[100px] -translate-x-[300px] rotate-[130deg] scale-y-[1]",
              "scale-x-[-1] fill-none opacity-[80%] blur-[0px] brightness-[188%] contrast-[110%] hue-rotate-[80deg] saturate-[230%] sepia-[40%]"
            )}
          ></Soundy>{" "}
          <Hero></Hero>
          {/* <Footer></Footer> */}
        </div>
      </div>
      <div className="absolute top-[450px] left-[250px] z-50 space-x-[50px] grid grid-flow-col">
        <VideoWebsite
          websiteDomain="imdb.com"
          videoSRC="https://tailwindcss.com/_next/static/media/column.com.b51c82b855e43d930ae0ef0bd15579df.mp4"
        ></VideoWebsite>
        <VideoWebsite
          websiteDomain="netflix.com"
          videoSRC="https://tailwindcss.com/_next/static/media/theverge.com.3275ed9cce231ccfe09a580b22cb46b5.mp4"
        ></VideoWebsite>
        <VideoWebsite
          websiteDomain="airbnb.com"
          videoSRC="https://tailwindcss.com/_next/static/media/githubnext.com.ba9e28d9bf1694795b129aca83ede8ab.mp4"
        ></VideoWebsite>
        <VideoWebsite
          websiteDomain="instagram.com"
          videoSRC="https://tailwindcss.com/_next/static/media/wander.com.8689ef42942b161401070163c1549660.mp4"
        ></VideoWebsite>
        {/* <VideoWebsite
          websiteDomain="instagram.com"
          videoSRC="https://tailwindcss.com/_next/static/media/wander.com.8689ef42942b161401070163c1549660.mp4"
        ></VideoWebsite>
        <VideoWebsite
          websiteDomain="instagram.com"
          videoSRC="https://tailwindcss.com/_next/static/media/wander.com.8689ef42942b161401070163c1549660.mp4"
        ></VideoWebsite> */}
      </div>
    </div>
  );
}
