"use client";

import Image from "next/image";
import { Product, useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div 
      className="group flex flex-col h-full cursor-pointer bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-forest/5 transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] group-hover:border-gold/20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.08]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Designer Scrim Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Floating Add to Cart Action */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full flex items-center justify-center gap-3 py-4 text-[10px] tracking-[0.3em] uppercase font-black shadow-2xl transition-all duration-500 ${
              added
                ? "bg-green-600 text-white"
                : "bg-forest text-white hover:bg-gold hover:text-forest"
            }`}
          >
            {added ? (
              <span className="flex items-center gap-2">PIECE RESERVED</span>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                ACQUIRE PIECE
              </>
            )}
          </button>
        </div>

        {/* Quick View Tag (Top) */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
           <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 border border-forest/5 flex items-center gap-2 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[9px] font-black tracking-widest text-forest">LIMITED EDITION</span>
           </div>
        </div>
      </div>

      {/* Narrative Info Section */}
      <div className="flex flex-col flex-1 pt-8 pb-4 px-1">
        <div className="flex items-center gap-4 mb-4">
           <p className="text-[9px] tracking-[0.4em] text-gold uppercase font-bold whitespace-nowrap">
             {product.category}
           </p>
           <div className="h-[1px] w-full bg-forest/5" />
        </div>

        <h3 className="text-xl md:text-2xl font-serif text-forest group-hover:text-gold transition-colors duration-500 leading-[1.2] mb-3">
          {product.name}
        </h3>
        
        <p className="text-xs text-forest/50 font-light leading-relaxed line-clamp-2 mb-6 tracking-wide">
          {product.description}
        </p>
        
        {/* Pricing Segment */}
        <div className="mt-auto flex items-end justify-between border-t border-forest/5 pt-6 group/price">
          <div className="flex flex-col">
             <span className="text-[8px] text-forest/40 tracking-[0.2em] font-black mb-1 uppercase">Price upon request</span>
             <span className="font-serif text-lg text-forest group-hover/price:text-gold transition-colors">
               Rp {product.price.toLocaleString("id-ID")}
             </span>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-forest/40 hover:text-gold transition-all duration-300 font-bold group-hover:translate-x-1"
          >
            {added ? "ADDED" : "DETAILS"}
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
