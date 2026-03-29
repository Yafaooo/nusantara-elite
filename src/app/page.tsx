"use client";

import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import IndonesianPattern from "@/components/IndonesianPattern";

const categories = ["All", "Batik Silk", "Premium Coffee", "Artisan Decor"];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ── Category strip ── */}
      <div className="bg-forest text-bone py-4 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-8 md:space-x-16">
          {categories.map((cat) => (
            <button
              key={cat}
              className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold whitespace-nowrap hover:text-gold transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Products Section ── */}
      <section id="products" className="relative bg-bone py-28 px-6 md:px-12 overflow-hidden">
        {/* Background pattern layer */}
        <div className="absolute inset-0 text-forest pointer-events-none">
          <IndonesianPattern />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase font-semibold mb-4">
              Our Collection
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-forest mb-5 leading-tight">
              Curated <span className="italic text-gold">Masterpieces</span>
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-forest/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-16 bg-forest/20" />
            </div>
            <p className="max-w-xl mx-auto text-forest/60 font-light leading-relaxed mt-6 text-sm md:text-base">
              Each piece in our collection is handpicked for its exceptional quality, deep-rooted heritage, and flawless execution.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* See more */}
          <div className="mt-24 text-center">
            <button className="group inline-flex items-center space-x-3 text-forest/60 hover:text-gold transition-colors">
              <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
              <span className="text-xs tracking-[0.25em] uppercase font-semibold">View Full Archive</span>
              <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Feature Banner ── */}
      <section className="bg-forest py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 text-bone pointer-events-none opacity-5">
          <IndonesianPattern />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase font-semibold mb-6">
              The Nusantara Promise
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-bone mb-10 leading-tight">
              Heritage crafted with <span className="italic text-gold">timeless precision</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: "✦", title: "Artisan-Certified", desc: "Every product is verified and hand-inspected by our master curators in Indonesia." },
              { icon: "✦", title: "White-Glove Delivery", desc: "Premium packaging and express-insured shipping directly to your door, worldwide." },
              { icon: "✦", title: "Heritage Guarantee", desc: "Full authenticity documentation and provenance included with each purchase." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-gold text-xl mb-4">{item.icon}</span>
                <h3 className="font-serif text-bone text-lg mb-3">{item.title}</h3>
                <p className="text-bone/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
