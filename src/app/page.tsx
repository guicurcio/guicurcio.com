export const dynamic = "force-static";

import AboutMe from "components/AboutMe/AboutMe";
import CompaniesWorked from "components/CompaniesWorked/CompaniesWorked";
import EngineeringLibrary from "components/EngineeringLibrary/EngineeringLibrary";
import Essay from "components/Essay/Essay";
import Links from "components/Links/Links";
import Project from "components/Project/Project";
import RecommendedBooks from "components/RecommendedBooks/RecommendedBooks";
import mergeClasses from "utils/mergeClasses";

export default function Page() {
  return (
    <div className="w-full h-full px-[50px] lg:pt-[30px] pb-[10px] grid grid-flow-row gap-y-4">
      <div className="grid grid-flow-row grid-rows-2 gap-y-1 w-full h-full ">
        <div className="grid lg:grid-flow-col grid-flow-row grid-rows-2 lg:grid-rows-1 row-span-2 lg:grid-cols-12 lg:row-span-1 gap-2 w-full h-full">
          <div
            className={mergeClasses(
              "lg:col-span-5 lg:grid grid-flow-col hidden"
            )}
          ></div>
          <AboutMe></AboutMe>
          <Links></Links>
        </div>
        <div className="grid lg:grid-flow-col grid-flow-row grid-rows-1 lg:grid-cols-12 row-span-1 gap-2 w-full h-full">
          <Project></Project>
          <EngineeringLibrary></EngineeringLibrary>
          <RecommendedBooks></RecommendedBooks>
        </div>
      </div>
      <div className="grid grid-flow-row grid-rows-6 gap-y-1 w-full h-full ">
        <div className="grid grid-flow-col grid-cols-12 row-span-6 gap-2 w-full h-full">
          <Essay></Essay>
          <CompaniesWorked></CompaniesWorked>
          <div className={mergeClasses("col-span-5 grid grid-flow-col")}></div>
        </div>
      </div>
    </div>
  );
}
