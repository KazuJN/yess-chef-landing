import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-body",
  display: "swap",
});

export const melodrama = localFont({
  src: "../assets/fonts/Melodrama-Variable.ttf",
  variable: "--font-display",
  weight: "300 700",
  display: "swap",
});

export const fontVariables = `${montserrat.variable} ${melodrama.variable}`;
