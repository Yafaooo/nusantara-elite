"use client";

import { useScroll } from "@/hooks/useScroll";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const scrollY = useScroll();
  const { toggleDrawer, cart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const isScrolled = scrollY > 80;

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navLinks = ["Batik Silk", "Premium Coffee", "Artisan Decor", "Our Story"];

  if (!mounted) return null;

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 w-full z-40 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border-b border-forest/5 py-4 px-6 md:px-16"
            : "bg-transparent py-8 px-6 md:px-16"
        )}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">

          {/* Left: Desktop Nav (Dynamic Color) */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link}
                href="#"
                className={clsx(
                  "text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 hover:tracking-[0.4em]",
                  isScrolled ? "text-forest hover:text-gold" : "text-white/90 hover:text-gold"
                )}
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger (Dynamic Color) */}
          <button 
            className="lg:hidden p-2 -ml-2 transition-colors duration-500" 
            onClick={() => setMobileOpen(true)} 
            aria-label="Open menu"
          >
            <Menu className={clsx("w-6 h-6", isScrolled ? "text-forest" : "text-white")} />
          </button>

          {/* Center: Brand (Logo stays Gold/Forest) */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
            <motion.div
              layout
              className={clsx(
                "text-2xl md:text-3xl font-serif font-bold tracking-widest whitespace-nowrap transition-all duration-700",
                isScrolled ? "text-forest scale-90" : "text-white scale-100"
              )}
            >
              Nusantara <span className="text-gold italic font-normal">Elite</span>
            </motion.div>
            <div className={clsx(
              "h-[1px] bg-gold transition-all duration-700",
              isScrolled ? "w-0" : "w-12 mt-1 opacity-50"
            )} />
          </Link>

          {/* Right: Desktop Nav + Actions */}
          <div className="flex items-center space-x-12">
            <nav className="hidden lg:flex items-center space-x-12">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link}
                  href="#"
                  className={clsx(
                    "text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 hover:tracking-[0.4em]",
                    isScrolled ? "text-forest hover:text-gold" : "text-white/90 hover:text-gold"
                  )}
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* Utility Icons (Dynamic Color) */}
            <div className="flex items-center space-x-6">
              <button className="group relative p-2" aria-label="Search items">
                <Search
                  className={clsx(
                    "w-4 h-4 transition-all duration-500 group-hover:scale-125",
                    isScrolled ? "text-forest group-hover:text-gold" : "text-white group-hover:text-gold"
                  )}
                />
              </button>
              
              <button
                onClick={toggleDrawer}
                className="group relative p-2"
                aria-label="Open cart"
              >
                <ShoppingBag
                  className={clsx(
                    "w-4 h-4 transition-all duration-500 group-hover:scale-125",
                    isScrolled ? "text-forest group-hover:text-gold" : "text-white group-hover:text-gold"
                  )}
                />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-[2px] -right-[2px] bg-gold text-forest text-[8px] font-black h-4 w-4 rounded-full flex items-center justify-center shadow-lg"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Nav Drawer (Improved UX) */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[100] flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-forest/80 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-[320px] bg-bone h-full flex flex-col p-12 z-10 shadow-2xl"
            >
              <button onClick={() => setMobileOpen(false)} className="self-end mb-16 p-2 text-forest/40 hover:text-gold transition-colors">
                <X className="w-6 h-6" />
              </button>
              <div className="text-3xl font-serif mb-16">
                Nusantara <span className="italic text-gold font-normal">Elite</span>
              </div>
              <nav className="flex flex-col space-y-10">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <Link
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="text-xs font-black tracking-[0.4em] uppercase text-forest/80 hover:text-gold transition-all"
                    >
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto py-8 border-t border-forest/10">
                <p className="text-[10px] tracking-widest text-forest/40 uppercase mb-4">Inquiries</p>
                <p className="text-xs font-medium text-forest/80 underline underline-offset-4">concierge@nusantaraelite.com</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
