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
      <Header></Header>
      {/* <body className="relative h-full w-full bg-[#151415fc] bg-opacity-[100%]"> */}
      <body className="relative h-full w-full bg-[#020d16] bg-opacity-[100%]">
        <div className="bg-newy h-full absolute z-0 w-full brightness-[60%]"></div>
        <div className="relative z-0 h-full overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
