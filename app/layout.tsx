import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "De'Longhi France | Machines à café, Appareils électroménagers",
  description: "Découvrez notre gamme complète de machines à café, expresso broyeurs, accessoires et appareils électroménagers De'Longhi. Livraison gratuite dès 39€.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body className={`antialiased ${outfit.className}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow mt-40">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
