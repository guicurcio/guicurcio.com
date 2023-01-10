import { Header } from "components/Header";
import "styles/fonts.css";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="relative h-full w-full bg-[#151415fc] bg-opacity-[100%]"> */}
      <body className="relative h-full w-full bg-[#020305] bg-opacity-[100%]">
        <div className="bg-newy h-screen absolute z-0 w-full brightness-[30%]"></div>
        <div className="relative z-0 h-screen overflow-x-hidden items-center items justify-items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
