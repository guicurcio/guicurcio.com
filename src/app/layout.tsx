import "styles/fonts.css";
import "styles/globals.css";
import Projects from "components/Projects";
import mergeClasses from "utils/mergeClasses";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen w-screen overflow-hidden bg-[#101012] bg-opacity-[100%] relative">
        <img
          src="waves.svg"
          className={mergeClasses(
            "bottom-[90px] left-[50px] rotate-[180deg] absolute ",
            "animate-pulse2 transform scale-y-[180%] scale-x-[250%] brightness-[180%] contrast-[100%]"
          )}
          draggable="false"
        ></img>
        <div className="grid grid-flow-col gap-0 items-start h-screen w-screen place-items-start">
          <Projects></Projects>
          {children}
        </div>
      </body>
    </html>
  );
}
