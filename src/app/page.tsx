import { Soundy } from "components/SoundGrad";
import { VideoWebsite } from "components/VideoWebsite";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <div className="mx-auto overflow-hidden">
      <div className="mx-auto">
        <div className=" h-[1200px] max-w-[1200px] mx-auto w-[1200px] overflow-hidden bg-grid2 rounded-[5px] border border-sharper border-opacity-5 bg-black2 bg-opacity-[100%] backdrop-blur-[0.1px] shadow-3xl ">
          <div className="w-[1000px] pt-[100px] mx-auto ">
            {/* <h5 className="pt-[20px] text-left cursor-pointer font-SpaceGrotesk text-[22px] lowercase opacity-100">
            <span className="font-normal tracking-[-3px] text-sharper text-opacity-[90%] ">
            websitesdealer.com
            </span>
          </h5> */}
            <div className="tracking-[-3.5px] mt-[15px] leading-[70px] font-visuelt z-50 text-white">
              <p className="text-[65px] font-light text-left  text-opacity-[75%]">
                <span className="">Website templates built</span>
                <br></br>
                <span className="ml-[3px]"> by powerful AI models</span>
              </p>
            </div>
            <div className="w-[400px] tracking-[-1.5px] text-[21px] text-sharper text-opacity-[100%] leading-[25px] text-left pt-[10px] font-calibre font-normal">
              <p className="ml-[5px]">
                Cloned & optimized websites them with AI models, polish them
                with SEO features, enhances it some more text here.
              </p>
            </div>
          </div>
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
