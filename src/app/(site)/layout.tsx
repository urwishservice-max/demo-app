import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/cookie-consent";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acheron | Modern Ideas. Real Impact. | Advisory Consultancy",
  description:
    "Acheron is a premier consultancy delivering AI and innovation, strategy and management, people and capability, and project development advisory for UAE organisations.",
  alternates: {
    canonical: "https://acheron.example.com",
  },
  openGraph: {
    title: "Acheron | Modern Ideas. Real Impact. | Advisory Consultancy",
    description: "Acheron is a premier consultancy delivering AI and innovation, strategy and management, people and capability, and project development advisory for UAE organisations.",
    url: "https://acheron.example.com",
    siteName: "Acheron Management Consultancies, LLC",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acheron | Modern Ideas. Real Impact. | Advisory Consultancy",
    description: "Acheron is a premier consultancy delivering AI and innovation, strategy and management, people and capability, and project development advisory for UAE organisations.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} h-full antialiased`} dir="ltr">
      <body className="min-h-full flex flex-col bg-[#202020] text-[#202020] selection:bg-[#CAC32C] selection:text-[#202020]">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
