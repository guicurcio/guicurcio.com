export const dynamic = "force-static";

import AboutMe from "components/AboutMe/AboutMe";
import Bare from "components/Bare/Bare";
import EngineeringLibrary from "components/EngineeringLibrary/EngineeringLibrary";
import Essay from "components/Essay/Essay";
import Project from "components/Project/Project";
import RecommendedBooks from "components/RecommendedBooks/RecommendedBooks";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-6 mx-20 my-10 pb-10">
      <AboutMe className="col-span-12"></AboutMe>
      <RecommendedBooks className="col-span-12 lg:col-span-8"></RecommendedBooks>
      <Essay
        name="AI Assisted Product Design"
        postTitle="AI Assisted Product Design"
        slug="ai-assisted-product-design"
        className="lg:col-span-4 col-span-12"
        children={
          <>
            <p className="text-[14px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Have you ever paused to consider the haunting beauty of a Bach
              composition or the intricate patterns of a Van Gogh painting? Now,
              imagine a world where machines claim the title of the artist. A
              world where the gentle brush strokes and the subtle piano chords
              are not birthed from human hands and souls but from cold,
              calculating algorithms.
            </p>
            <Image
              className="w-[150px] h-[100px] mt-[15px] mb-[5px] mx-auto object-fill grayscale hover:grayscale-0"
              src={"/podsfy-selection.png"}
              alt="asd"
              width={1920}
              height={1080}
              quality={100}
            ></Image>
            <p className="text-[14px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              We're on the cusp of such a world, and as we inch closer, there's
              a nagging question: In this AI-driven design utopia (or dystopia,
              depending on your perspective), what becomes of the human
              artist...
            </p>
          </>
        }
      ></Essay>
      <Project
        name="podsfy.com"
        imageURL="/assets/websites/podsfy2.jpg"
        URL="/podsfy"
        className="lg:col-span-6 col-span-12"
      ></Project>
      <Project
        name="sumias.com"
        imageURL="/assets/websites/sumias.png"
        className="lg:col-span-6 col-span-12"
      ></Project>
      <EngineeringLibrary className="lg:col-span-6 col-span-12"></EngineeringLibrary>
      <Bare
        interest="Coffee"
        imageURL="/assets/interests/coffee2.png"
        className="lg:col-span-3 col-span-12 hidden lg:block"
      ></Bare>
      <Bare
        interest="Podcasts"
        imageURL="/assets/interests/podcasts.png"
        className="lg:col-span-3 col-span-12 hidden lg:block"
      ></Bare>
      <Essay
        name="Principles in Pixels"
        postTitle="Principles in Pixels"
        slug="principles-in-pixels"
        className="lg:col-span-4 col-span-12"
        children={
          <>
            <p className="text-[14px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              We often find ourselves lost in the labyrinth of code, interfaces,
              and digital constructs, forgetting the very essence of why we
              create. Bret Victor's "Inventing on Principle" serves as a beacon,
              reminding us of the soul behind the software.
            </p>

            <p className="text-[14px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              The allure of Victor's "immediate connection" is not just in
              revolutionizing software design; it's a clarion call for every
              creator, in every field, to witness the real-time fruition of
              their ideas. This immediacy, this tangible dance between idea and
              outcome, transcends code—it has the potential to redefine any
              craft, from architecture to zoology.
            </p>
            <p className="text-[14px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Yet, at the heart of Victor's ethos is not just the how but the
              why. The guiding principle. It's not a mere compass but the very
              wind that propels our sails.
            </p>
          </>
        }
      ></Essay>
      <Project
        name="obtuso.com"
        imageURL="/assets/websites/obtuso.png"
        URL="/obtuso"
        imageClassname="object-cover"
        className="col-span-12 lg:col-span-5"
      ></Project>
      <Bare
        interest="Gardening"
        imageURL="/assets/interests/greenhouse2.png"
        className="lg:col-span-3 col-span-12 hidden lg:block"
      ></Bare>
      <Essay
        name="The Epistemic Trinity"
        className="lg:col-span-4 col-span-12"
        postTitle="The Epistemic Trinity"
        slug="the-epistemic-trinity"
        children={
          <>
            <p className="text-[14px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Some knowledge-getting can be akin to hiking the Everest. You
              cannot reach to the top unless you do the work of hiking the trail
              that leads to the top. Now, we could get to the top by flying on a
              helicopter, but we could not say that we hiked the Everest, not in
              any meaningful way. It's in this sense that knowing mathematics,
              playing chess or knowing how to code -from one day to another-
              it's equivalent to appearing in Mount Everest without having hiked
              the trail (i.e. it's impossible.)
            </p>

            <p className="text-[14px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              There's a binary aspect in a lot of knowledge: you either know
              mathematics or you don't. You either know how to code or you
              don't. But as you learn mathematics you don't get to _know_
              mathematics. If anything, you get to know how _little_ you know
              mathematics...
            </p>
          </>
        }
      ></Essay>
      <Bare
        interest="Chess"
        imageURL="/assets/interests/chess.png"
        className="lg:col-span-3 col-span-12 hidden lg:block"
      ></Bare>
      <Project
        name="guicurcio.com"
        imageURL="/assets/websites/guicurcio3.jpg"
        URL="/"
        className="lg:col-span-5 col-span-12"
      ></Project>
      <Project
        name="subidos.com"
        imageURL="/assets/websites/subidos.jpg"
        URL="/subidos"
        className="lg:col-span-5 col-span-12"
      ></Project>
    </div>
  );
}
