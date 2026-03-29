"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Stagger container for sequential animation
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[680px] w-full flex items-center justify-center overflow-hidden">
      {/* Background — high-quality Batik textile */}
      <div className="absolute inset-0 z-0 bg-forest">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2560&auto=format&fit=crop"
          alt="Indonesian Heritage Batik"
          fill
          className="object-cover scale-105 opacity-60"
          priority
        />
        {/* Rich deep green/black gradient for a luxury look and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-forest/50 to-black/90" />
        
        {/* Subtle Silk Glow */}
        <div className="absolute inset-0 bg-forest/20 mix-blend-overlay" />
      </div>

      {/* Decorative side lines with subtle glow */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-10 opacity-40">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="w-2 h-2 rounded-full border border-gold" />
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-10 opacity-40">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="w-2 h-2 rounded-full border border-gold" />
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center"
      >
        {/* Premium Label */}
        <motion.div variants={fadeUp} className="flex items-center space-x-5 mb-8">
          <div className="h-[1px] w-12 bg-gold/50" />
          <p className="text-gold tracking-[0.5em] text-[10px] md:text-xs uppercase font-bold drop-shadow-lg">
            Est. 2024 &nbsp;·&nbsp; Curated Masterpieces
          </p>
          <div className="h-[1px] w-12 bg-gold/50" />
        </motion.div>

        {/* Majestic heading */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-[8rem] font-serif text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl"
        >
          Nusantara
          <br />
          <span className="italic text-gold/90 font-normal">Elite</span>
        </motion.h1>

        {/* Elegant Divider */}
        <motion.div variants={fadeIn} className="w-20 h-[2px] bg-gold/60 my-6 shadow-[0_0_15px_rgba(212,175,55,1)]" />

        {/* Narrative sub-heading */}
        <motion.p
          variants={fadeUp}
          className="text-bone/80 text-sm md:text-lg max-w-2xl mx-auto font-light leading-loose tracking-wide mb-14 drop-shadow-md px-4"
        >
          Experience the pinnacle of Indonesian craftsmanship. Hand-drawn Batik Silk, volcanic-grown Coffee, and artisanal pottery—elevated for the modern connoisseur.
        </motion.p>

        {/* High-end CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            href="#products"
            className="bg-gold text-forest px-12 py-5 tracking-[0.3em] text-[11px] font-black shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:bg-white hover:text-black transition-all duration-500 uppercase rounded-sm inline-block min-w-[240px]"
          >
            EXPLORE THE CURATION
          </Link>
          <Link
            href="#"
            className="group relative overflow-hidden border border-white/40 text-white px-12 py-5 tracking-[0.3em] text-[11px] font-bold hover:border-gold transition-all duration-700 uppercase backdrop-blur-sm rounded-sm inline-block min-w-[240px]"
          >
            <span className="relative z-10 group-hover:text-gold transition-colors duration-500">OUR STORY</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-sm" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Refined Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 z-10"
      >
        <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase font-bold">Scroll</span>
        <div className="relative w-[1px] h-14 bg-white/10 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
