import "styles/fonts.css";
import "styles/globals.css";
import mergeClasses from "utils/mergeClasses";

export const siteConfig = {
  name: "guicurcio.com",
  description: "Guido Curcio is a software.",
  url: "https://www.guicurcio.com",
  ogImage: "https://www.guicurcio.com/og.jpg",
  links: {
    twitter: "https://twitter.com/guicurcio",
  },
};

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "guicurcio",
      url: "https://guicurcio.com",
    },
  ],
  creator: "guicurcio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@guicurcio",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-[#161515] bg-opacity-[100%] relative">
        <div className="w-full h-full">
          {/* <Projects></Projects> */}
          {children}
        </div>
      </body>
    </html>
  );
}
