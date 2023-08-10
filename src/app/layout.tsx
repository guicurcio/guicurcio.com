import "styles/fonts.css";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-full w-full overflow-hidden bg-[#101012] bg-opacity-[100%] relative">
       
        <img
            src="waves.svg"
            className="h-[467px] top-[0px] rotate-[0deg] absolute right-[10px] w-[2300px]   animate-pulse2 transform scale-[110%] brightness-[150%]"
            draggable="false"
          ></img>
           <div className="relative z-20 h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
