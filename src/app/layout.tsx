import type { Metadata } from "next";
import { Outfit, Wix_Madefor_Text, Yeseva_One } from "next/font/google";
import "./globals.css";

const yesevaOne = Yeseva_One({
  variable: "--font-yeseva-one",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "400",
});

const wixMadeforText = Wix_Madefor_Text({
  variable: "--font-wix-madefor-text",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Legal Ace",
  description: "Your trusted partner in legal matters",
  keywords: [
    "the legal ace",
    "thelegalace",
    "The legal ace",
    "The Legal ace",
    "The Legal Ace",
    "law firm",
    "legal services",
    "corporate law",
    "criminal defense",
    "family law",
  ],
  authors: [{ name: "The Legal Ace", url: "https://thelegalace.com" }],
  openGraph: {
    title: "The Legal Ace",
    description: "Your trusted partner in legal matters",
    siteName: "The Legal Ace",
    type: "website",
    // replace with your canonical URL
    url: "https://thelegalace.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Legal Ace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Legal Ace",
    description: "Your trusted partner in legal matters",
    // replace with your twitter handle if available
    creator: "@TheLegalAce",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b232b" },
    { color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${yesevaOne.className} ${outfit.variable} ${wixMadeforText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
