import "styles/fonts.css";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative h-full w-full overflow-hidden bg-[#202125] bg-opacity-[100%]">
        <div className="bg-newy h-screen absolute overflow-hidden z-0 w-full brightness-[10%]"></div>
        <div className="relative z-0 h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
