import "styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  );
}
