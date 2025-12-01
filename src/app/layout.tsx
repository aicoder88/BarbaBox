import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "BarbaBox",
  description: "Vaš prostor. Vaš mir. Vaša sloboda. Sigurno skladištenje u Zagrebu s pristupom 24/7.",
  keywords: [
    "skladištenje Zagreb",
    "self storage Zagreb",
    "skladišni prostor",
    "sigurno skladištenje",
    "klimatizirano skladište",
    "24/7 pristup",
    "BarbaBox",
    "skladište Avenue Mall"
  ],
  authors: [{ name: "BarbaBox" }],
  openGraph: {
    title: "BarbaBox - Sigurno Skladištenje u Zagrebu",
    description: "Vaš prostor. Vaš mir. Vaša sloboda. Sigurno skladištenje u Zagrebu s pristupom 24/7.",
    url: "https://barbabox.hr",
    siteName: "BarbaBox",
    images: [
      {
        url: "https://barbabox.hr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BarbaBox - Skladištenje u Zagrebu",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BarbaBox - Sigurno Skladištenje u Zagrebu",
    description: "Vaš prostor. Vaš mir. Vaša sloboda. Sigurno skladištenje u Zagrebu s pristupom 24/7.",
    images: ["https://barbabox.hr/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
