import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./../globals.css"
import Navbar from "@/components/navbar";
import { parseLocale } from "@/hooks/useTranslation";
import { codePool, getRandomSnippets } from "@/components/codePool";


const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Kevin Trejo",
    description: "Portfolio",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>,
}>) {

    const lang = await params;
    const l = parseLocale(lang.locale);

    const randomSnippet = getRandomSnippets(codePool, 40);

    return (
      <html lang="en">
          <body
              className={`${montserrat.variable} antialiased w-full h-dvh`}
          >
          <div className="font-montserrat text-white w-full h-full flex flex-col">
            <div className="-z-10 fixed w-dvw h-dvh bg-radial-[at_85%_60%] from-gray-700 to-gray-950">
                <p className="text-5xl xl:text-7xl text-pretty text-justify select-none text-white/2">{randomSnippet}</p>
            </div>

          <Navbar
            className="w-full"
            locale={l}
          />
          {children}
          </div>
        </body>
    </html>
  );
}
