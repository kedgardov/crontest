import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getLocale } from "@/locales/locales";
import useTranslation from "@/hooks/useTranslation";
import Navbar from "@/components/navbar";


const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const locale = getLocale();
const { t } = useTranslation(locale);

export const metadata: Metadata = {
    title: "Kevin Trejo",
    description: t("meta_description"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <html lang="en">
          <body
              className={`${montserrat.variable} bg-red-500 antialiased w-full h-dvh`}
          >
          <div className="font-montserrat text-white w-full h-full bg-radial-[at_85%_60%] from-gray-700 to-gray-950 flex flex-col">
          <Navbar
            className="w-full"
          />
          {children}
          </div>
        </body>
    </html>
  );
}
