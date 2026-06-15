import { LenisProvider } from "@/components/providers/LenisProvider";
import { assets } from "@/lib/assets";
import { fontVariables, montserrat } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yess-chef.example.com"),
  title: "Yess Chef | An experience like never before",
  description:
    "Come dine with us at Yess Chef. Reserve a table Wed–Sun, 7:00 PM–9:00 PM & 9:30 PM–11:30 PM.",
  keywords: ["restaurant", "fine dining", "reservations", "Yess Chef"],
  openGraph: {
    title: "Yess Chef",
    description: "An experience like never before. Come dine with us.",
    type: "website",
    images: [{ url: assets.images.hero, width: 1200, height: 750, alt: "Yess Chef dining room" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yess Chef",
    description: "An experience like never before. Come dine with us.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const patternStyle = {
    "--pattern-image": `url("${assets.illustrations.backgroundPattern}")`,
  } as React.CSSProperties;

  return (
    <html lang="en" className={fontVariables} style={patternStyle}>
      <body className={`${montserrat.className} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
