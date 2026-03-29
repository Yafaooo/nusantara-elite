import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const baskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: '--font-baskerville',
});

export const metadata: Metadata = {
  title: "Nusantara Elite | High-End Indonesian Curations",
  description: "Curated collection of the finest Batik Silk, Premium Coffee, and Artisan Decor from Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${baskerville.variable} font-sans min-h-screen bg-bone text-forest`}>
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
