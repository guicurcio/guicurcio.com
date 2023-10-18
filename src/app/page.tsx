export const dynamic = "force-static";

import AboutMe from "components/AboutMe/AboutMe";
import Bare from "components/Bare/Bare";
import CompaniesWorked from "components/CompaniesWorked/CompaniesWorked";
import EngineeringLibrary from "components/EngineeringLibrary/EngineeringLibrary";
import Essay from "components/Essay/Essay";
import Links from "components/Links/Links";
import Project from "components/Project/Project";
import RecommendedBooks from "components/RecommendedBooks/RecommendedBooks";
import mergeClasses from "utils/mergeClasses";

export default function Page() {
  return (
    <div className="w-full h-full px-[50px] lg:pt-[30px] pb-[20px] grid grid-flow-row gap-y-4">
      <div className="grid grid-flow-row grid-rows-4 gap-y-4 w-full h-full ">
        <div className="grid lg:grid-flow-col grid-flow-row grid-rows-2 lg:grid-rows-1 row-span-3 lg:grid-cols-12 lg:row-span-2 gap-2 w-full h-full">
          <div
            className={mergeClasses(
              "lg:col-span-7 lg:grid grid-flow-col hidden"
            )}
          ></div>
          <AboutMe></AboutMe>
          {/* <Links></Links> */}
        </div>
        <div className="grid lg:grid-flow-col grid-flow-row grid-rows-1 lg:grid-cols-12 row-span-1 lg:row-span-2 gap-2 w-full h-full">
          <Project
            name="podsfy.com"
            imageURL="/assets/websites/podsfy2.jpg"
            URL="/podsfy"
          ></Project>
          <Essay
            name="AI Assisted Product Design"
            postTitle="AI Assisted Product Design"
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
            imageURL="/assets/interests/coffee.png"
          ></Bare>
          <Bare
            interest="Gardening"
            imageURL="/assets/interests/greenhouse.png"
          ></Bare>
          <Essay
            name="Inventing On Principle"
            postTitle="Inventing On Principle"
          ></Essay>
        </div>
        <div className="grid grid-flow-col grid-cols-12 row-span-3 gap-2 w-full h-full">
          <Project
            name="obtuso.com"
            imageURL="/assets/websites/sumias4.png"
            URL="/obtuso"
          ></Project>
          <Bare
            interest="Podcasts"
            imageURL="/assets/interests/greenhouse.png"
          ></Bare>
          <Essay
            name="The Epistemic Trinity"
            postTitle="The Epistemic Trinity"
          ></Essay>
        </div>
      </div>
      <div className="grid grid-flow-row grid-rows-6 gap-4 w-full h-full">
        <div className="grid grid-flow-col grid-cols-12 row-span-3 gap-2 w-full h-full">
          <Bare interest="Chess" imageURL="/assets/interests/chess.png"></Bare>
          <Project
            name="guicurcio.com"
            imageURL="/assets/websites/guicurcio.jpg"
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
