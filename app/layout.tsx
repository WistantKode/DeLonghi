import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

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
    <html lang="fr">
      <body className="antialiased">
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
