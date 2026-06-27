import type { Metadata } from "next";
import { Poppins, Playfair_Display, Caveat, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Happy Belated Birthday, My Elder Brother ❤️ | A Gratitude Tribute",
  description: "A cinematic thank-you birthday tribute dedicated to my elder brother, my guide, protector, and biggest supporter.",
  keywords: ["Birthday Tribute", "Brother", "Gratitude", "Surprise Website"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} ${caveat.variable} ${dancingScript.variable} scroll-smooth dark`}
    >
      <body className="font-sans bg-[#0B1120] text-slate-100 min-h-screen selection:bg-purple-500 selection:text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
