import "styles/fonts.css";
import "styles/globals.css";
import Projects from "components/Projects";

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
          className="h-[467px] top-[0px] rotate-[0deg] absolute right-[10px] w-[2300px]   animate-pulse2 transform scale-[110%] brightness-[150%]"
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
