export const dynamic = "force-static";

import AboutMe from "components/AboutMe/AboutMe";
import EngineeringLibrary from "components/EngineeringLibrary/EngineeringLibrary";
import Links from "components/Links/Links";
import Project from "components/Project/Project";
import RecommendedBooks from "components/RecommendedBooks/RecommendedBooks";
import mergeClasses from "utils/mergeClasses";

export default function Page() {
  return (
    <div className="w-full h-full px-[50px] pt-[30px] pb-[10px]">
      <div className="grid grid-flow-row grid-rows-2 gap-y-1 w-full h-full ">
        <div className="grid grid-flow-col grid-cols-12 row-span-1 gap-2 w-full h-full">
          <div className={mergeClasses("col-span-5 grid grid-flow-col")}></div>
          <AboutMe></AboutMe>
          <Links></Links>
        </div>
        <div className="grid grid-flow-col grid-cols-12 row-span-1  gap-2 w-full h-full max-h-full max-w-full">
          <Project></Project>
          <EngineeringLibrary></EngineeringLibrary>
          <RecommendedBooks></RecommendedBooks>
        </div>
      </div>
    </div>
  );
}
