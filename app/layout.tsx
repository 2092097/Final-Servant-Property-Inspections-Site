import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Servant Property Inspections | Kennesaw, GA & Metro Atlanta",
  description:
    "From anxious to assured—before you sign. InterNACHI certified, veteran-owned home inspections serving Kennesaw, GA and Metro Atlanta. Call 202-655-8567.",
  keywords:
    "home inspection, property inspection, Kennesaw GA, Metro Atlanta, InterNACHI certified, veteran owned",
  openGraph: {
    title: "Servant Property Inspections",
    description: "From anxious to assured—before you sign.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HY1CNS2X1K"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HY1CNS2X1K');
            gtag('config', 'AW-18090629869');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
