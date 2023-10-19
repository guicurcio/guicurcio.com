export const dynamic = "force-static";

import AboutMe from "components/AboutMe/AboutMe";
import Bare from "components/Bare/Bare";
import CVEntry from "components/CVEntry/CVEntry";
import CompaniesWorked from "components/CompaniesWorked/CompaniesWorked";
import EngineeringLibrary from "components/EngineeringLibrary/EngineeringLibrary";
import Essay from "components/Essay/Essay";
import NewEntry from "components/NewEntry/NewEntry";
import Project from "components/Project/Project";
import RecommendedBooks from "components/RecommendedBooks/RecommendedBooks";
import WorkedSites from "components/WorkedSites/WorkedSites";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-6 mx-20 my-10 pb-10">
      <AboutMe className="col-span-4"></AboutMe>
      <NewEntry className="col-span-12 lg:col-span-8 h-[480px]"></NewEntry>
      <WorkedSites
        className="col-span-12 lg:col-span-6"
        name="obtuso.com"
        position="Tech Lead"
        imageURL="/assets/websites/obtuso.png"
      ></WorkedSites>
      <WorkedSites
        className="col-span-12 lg:col-span-6"
        name="nhost.io"
        position="Senior Frontend Engineer"
        imageURL="/assets/websites/nhost.jpg"
        imageClassname="object-cover"
      ></WorkedSites>
      <WorkedSites
        className="col-span-12 lg:col-span-6"
        name="earlysquad.com"
        position="Software Engineer"
        imageURL="/assets/websites/sumias.png"
      ></WorkedSites>
      <WorkedSites
        className="col-span-12 lg:col-span-6"
        name="Policia Federal Argentina"
        position="Agent"
        imageURL="/assets/websites/pfa.jpg"
      ></WorkedSites>
      <CVEntry
        name="Technical Skills"
        postTitle="Technical Skills"
        slug="ai-assisted-product-design"
        className="lg:col-span-4 col-span-12"
        children={
          <>
            <p className="text-[16px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Technologies: <br></br>React.js, Next.js, GraphQL, Web Standards,
              CSS, Node.js, Tailwindcss.
            </p>
            <p className="text-[16px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Programming Languages: <br></br>Typescript, Javascript, Rust,
              Python.
            </p>
            <p className="text-[16px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Other: <br></br> SEO, accessibility, performance, testing, CI/CD,
              security, project management.
            </p>
          </>
        }
      ></CVEntry>
      <CVEntry
        name="Education"
        postTitle="Education"
        slug="ai-assisted-product-design"
        className="lg:col-span-4 col-span-12"
        children={
          <>
            <p className="text-[16px] font-light font-inter text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Communication Sciences <br></br>(Universidad Argentina de la
              Empresa)
            </p>

            <p className="text-[16px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Bachelor's Degree in Economics and Administration. <br></br>
              (PASCH-Schulen: Deutsche Schule Lanus Oeste)
            </p>
          </>
        }
      ></CVEntry>
      <CVEntry
        name="Other "
        postTitle="Other "
        slug="ai-assisted-product-design"
        className="lg:col-span-4 col-span-12"
        children={
          <>
            <p className="text-[16px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Location: <br></br>Buenos Aires, Argentina (GMT-3)
            </p>
            <p className="text-[16px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Birthday: <br></br>29/11/1994
            </p>
            <p className="text-[16px] font-light font-inter mb-[5px] text-[#707070] pt-[10px]  leading-[18.2px] tracking-[-0.07px] text-justify">
              Interests: <br></br>Gardening, Chess, Podcasts, Reading, Writing,
              Cooking.
            </p>
          </>
        }
      ></CVEntry>
    </div>
  );
}
