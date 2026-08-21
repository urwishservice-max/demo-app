import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/cookie-consent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asheron | Strategy, AI Governance & Advisory Consultancy in Dubai",
  description:
    "Asheron is a Dubai-based consultancy delivering AI and innovation, strategy and management, people and capability, and project development advisory for UAE organisations.",
  alternates: {
    canonical: "https://asheron.example.com",
  },
  openGraph: {
    title: "Asheron | Strategy, AI Governance & Advisory Consultancy in Dubai",
    description: "Asheron is a Dubai-based consultancy delivering AI and innovation, strategy and management, people and capability, and project development advisory for UAE organisations.",
    url: "https://asheron.example.com",
    siteName: "Asheron Management Consultancies, LLC",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asheron | Strategy, AI Governance & Advisory Consultancy in Dubai",
    description: "Asheron is a Dubai-based consultancy delivering AI and innovation, strategy and management, people and capability, and project development advisory for UAE organisations.",
  },
  robots: {
    index: false,
    follow: false, // Set to true for production
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} dir="ltr">
      <body className="min-h-full flex flex-col bg-white text-navy-900 pt-20 lg:pt-24">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
