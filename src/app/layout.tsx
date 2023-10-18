import "styles/fonts.css";
import "styles/globals.css";
import mergeClasses from "utils/mergeClasses";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-[#161515] bg-opacity-[100%] relative">
        <img
          src="waves.svg"
          className={mergeClasses(
            "bottom-[550px]  left-[-250px] rotate-[160deg] absolute scale-y-[1]",
            "animate-pulse2 transform scale-y-[480%] scale-x-[250%] brightness-[150%]  contrast-[150%]"
          )}
          draggable="false"
        ></img>
        <div className="w-full h-full">
          {/* <Projects></Projects> */}
          {children}
        </div>
      </body>
    </html>
  );
}
