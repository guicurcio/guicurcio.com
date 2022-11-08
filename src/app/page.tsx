import { Footer } from "components/Footer";
import { Hero } from "components/Hero";
import { VideoWebsite } from "components/VideoWebsite";

export default function Page() {
  return (
    <div className="mx-auto overflow-hidden">
      <div className="mx-auto">
        <div className=" h-[1000px] max-w-[1200px] mx-auto w-[1200px] overflow-hidden bg-grid2 rounded-[5px] border border-sharper border-opacity-5 bg-fondy bg-opacity-[100%] backdrop-blur-[0.1px] shadow-3xl ">
          <Hero></Hero>
          <Footer></Footer>
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
