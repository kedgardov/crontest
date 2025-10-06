import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getLocale } from "@/locales/locales";
import useTranslation from "@/hooks/useTranslation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        className={`${montserrat.variable} antialiased w-screen h-dvh flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
