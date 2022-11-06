import Link from "next/link";
import "styles/globals.css";
import "styles/fonts.css";
import { twMerge } from "tailwind-merge";
import { Soundy } from "components/SoundGrad";
import { Header } from "components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header></Header>
      <body className="relative h-full w-full bg-[#151415fc] bg-opacity-[100%]">
        <div className="bg-newy h-full absolute z-0 w-full brightness-[-550%] contrast-[890%] hue-rotate-60 saturate-[20%]"></div>
        <div className="z-10 h-full">{children}</div>
      </body>
    </html>
  );
}
