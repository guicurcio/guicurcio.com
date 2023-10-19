export const dynamic = "force-static";

import AboutMe from "components/AboutMe/AboutMe";
import Bare from "components/Bare/Bare";
import CompaniesWorked from "components/CompaniesWorked/CompaniesWorked";
import EngineeringLibrary from "components/EngineeringLibrary/EngineeringLibrary";
import Essay from "components/Essay/Essay";
import Project from "components/Project/Project";
import RecommendedBooks from "components/RecommendedBooks/RecommendedBooks";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full px-[50px] lg:pt-[30px]  grid grid-flow-row gap-y-4">
      <div className="grid grid-flow-row grid-rows-3 gap-y-4 w-full h-full ">
        <div className="grid lg:grid-flow-col grid-flow-row grid-rows-1 grid-cols-12 row-span-1 lg:row-span-1 w-full h-full">
          <AboutMe></AboutMe>
        </div>
        <div className="grid lg:grid-flow-col grid-flow-row grid-rows-1 lg:grid-cols-12 row-span-2 lg:row-span-2 gap-2 w-full h-full">
          <Project
            name="podsfy.com"
            imageURL="/assets/websites/podsfy2.jpg"
            URL="/podsfy"
          ></Project>
          <Essay
            name="AI Assisted Product Design"
            postTitle="AI Assisted Product Design"
            slug="ai-assisted-product-design"
            className=""
            children={
              <>
                <p className="text-[14px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
                  Have you ever paused to consider the haunting beauty of a Bach
                  composition or the intricate patterns of a Van Gogh painting?
                  Now, imagine a world where machines claim the title of the
                  artist. A world where the gentle brush strokes and the subtle
                  piano chords are not birthed from human hands and souls but
                  from cold, calculating algorithms.
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
                  We're on the cusp of such a world, and as we inch closer,
                  there's a nagging question: In this AI-driven design utopia
                  (or dystopia, depending on your perspective), what becomes of
                  the human artist...
                </p>
              </>
            }
          ></Essay>
          <RecommendedBooks></RecommendedBooks>
        </div>
      </div>
      <div className="grid grid-flow-row grid-rows-6 gap-y-1 w-full h-full ">
        <div className="grid grid-flow-col grid-cols-12 row-span-6 gap-2 w-full h-full">
          <CompaniesWorked></CompaniesWorked>
          <Project
            name="sumias.com"
            imageURL="/assets/websites/sumias.png"
          ></Project>
          <EngineeringLibrary></EngineeringLibrary>
        </div>
      </div>
      <div className="grid grid-flow-row grid-rows-6 gap-4 w-full h-full">
        <div className="grid grid-flow-col grid-cols-12 row-span-3 gap-2 w-full h-full">
          <Bare
            interest="Coffee"
            imageURL="/assets/interests/coffee2.png"
          ></Bare>
          <Bare
            interest="Podcasts"
            imageURL="/assets/interests/podcasts.png"
          ></Bare>

          <Essay
            name="Principles in Pixels"
            postTitle="Principles in Pixels"
            slug="principles-in-pixels"
            children={
              <>
                <p className="text-[14px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
                  We often find ourselves lost in the labyrinth of code,
                  interfaces, and digital constructs, forgetting the very
                  essence of why we create. Bret Victor's "Inventing on
                  Principle" serves as a beacon, reminding us of the soul behind
                  the software.
                </p>

                <p className="text-[14px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
                  The allure of Victor's "immediate connection" is not just in
                  revolutionizing software design; it's a clarion call for every
                  creator, in every field, to witness the real-time fruition of
                  their ideas. This immediacy, this tangible dance between idea
                  and outcome, transcends code—it has the potential to redefine
                  any craft, from architecture to zoology.
                </p>
                <p className="text-[14px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
                  Yet, at the heart of Victor's ethos is not just the how but
                  the why. The guiding principle. It's not a mere compass but
                  the very wind that propels our sails.
                </p>
              </>
            }
          ></Essay>
        </div>
        <div className="grid grid-flow-col grid-cols-12 row-span-3 gap-2 w-full h-full">
          <Project
            name="obtuso.com"
            imageURL="/assets/websites/obtuso.png"
            URL="/obtuso"
            imageClassname="object-cover"
          ></Project>
          <Bare
            interest="Gardening"
            imageURL="/assets/interests/greenhouse2.png"
          ></Bare>
          <Essay
            name="The Epistemic Trinity"
            postTitle="The Epistemic Trinity"
            slug="the-epistemic-trinity"
            children={
              <>
                <p className="text-[14px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
                  Some knowledge-getting can be akin to hiking the Everest. You
                  cannot reach to the top unless you do the work of hiking the
                  trail that leads to the top. Now, we could get to the top by
                  flying on a helicopter, but we could not say that we hiked the
                  Everest, not in any meaningful way. It's in this sense that
                  knowing mathematics, playing chess or knowing how to code
                  -from one day to another- it's equivalent to appearing in
                  Mount Everest without having hiked the trail (i.e. it's
                  impossible.)
                </p>

                <p className="text-[14px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
                  There's a binary aspect in a lot of knowledge: you either know
                  mathematics or you don't. You either know how to code or you
                  don't. But as you learn mathematics you don't get to _know_
                  mathematics. If anything, you get to know how _little_ you
                  know mathematics...
                </p>
              </>
            }
          ></Essay>
        </div>
      </div>
      <div className="grid grid-flow-row grid-rows-6 gap-4 w-full h-full">
        <div className="grid grid-flow-col grid-cols-12 row-span-5 gap-2 w-full h-full">
          <Bare interest="Chess" imageURL="/assets/interests/chess.png"></Bare>
          <Project
            name="guicurcio.com"
            imageURL="/assets/websites/guicurcio3.jpg"
            URL="/"
          ></Project>
          <Project
            name="subidos.com"
            imageURL="/assets/websites/subidos.jpg"
            URL="/subidos"
          ></Project>
        </div>
      </div>
    </div>
  );
}
