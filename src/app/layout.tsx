import type { Metadata } from "next";
import { manrope, montserrat } from "../fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeslaDoc — ремонт и диагностика Tesla в Кишинёве",
  description:
    "TeslaDoc — сервис по диагностике, ремонту и обслуживанию автомобилей Tesla в Кишинёве. Компьютерная диагностика, ремонт батареи, дооснащение и профессиональный сервис Tesla.",

  keywords: [
    "Tesla сервис Кишинев",
    "ремонт Tesla Молдова",
    "Tesla диагностика",
    "Tesla сервис Chisinau",
    "ремонт Tesla Model S",
    "ремонт Tesla Model 3",
      "ремонт Tesla Model X",
    "ремонт Tesla Model Y",
    "TeslaDoc",
    "diagnosticul tesla",
    "reparatii tesla",
    "teslaservice",
    "привязка ключей Tesla",
  ],

  authors: [{ name: "TeslaDoc" }],

  metadataBase: new URL("https://tesladoc.md"),

  openGraph: {
    title: "TeslaDoc — сервис Tesla в Кишинёве",
    description:
      "TeslaDoc - Професиональный подход к ремонту и обслуживанию автомобилей Tesla ✔️ Диагностика состояния автомобиля ✔️ Ремонт любой сложнсти ✔️ Гарантия ✔️ +373(79)438-25",
    url: "https://tesladoc.md",
    siteName: "TeslaDoc",
    locale: "ru_MD",
    type: "website",
    images: [
      {
        url: "/image/seo-preview.jpg",
        width: 1200,
        height: 630,
        alt: "TeslaDoc сервис Tesla",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://tesladoc.md",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}