import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concept Pages",
  description: "Design Concepts",
};

export default function ConceptsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} dir="ltr">
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
