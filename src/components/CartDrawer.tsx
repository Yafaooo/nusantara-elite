"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { cart, isDrawerOpen, toggleDrawer, updateQuantity, removeFromCart, subtotal } = useCart();

  useEffect(() => {
    if (isDrawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isDrawerOpen]);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-forest/50 backdrop-blur-sm cursor-pointer"
            onClick={toggleDrawer}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.45 }}
            className="relative w-full max-w-[420px] bg-bone shadow-2xl flex flex-col h-full z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-forest/8">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-4 h-4 text-gold" />
                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-forest">
                  Shopping Bag
                  {cart.length > 0 && (
                    <span className="ml-2 text-gold">({cart.length})</span>
                  )}
                </h2>
              </div>
              <button
                onClick={toggleDrawer}
                className="text-forest/40 hover:text-gold transition-colors p-1"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto hide-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-8 py-16">
                  <ShoppingBag className="w-12 h-12 text-forest/15 mb-6" />
                  <p className="font-serif italic text-xl text-forest/40 mb-3">Your bag is empty</p>
                  <p className="text-xs text-forest/30 mb-8 font-light">Add something extraordinary to begin.</p>
                  <button
                    onClick={toggleDrawer}
                    className="text-[10px] tracking-[0.25em] uppercase border-b border-forest/30 pb-1 hover:text-gold hover:border-gold transition-colors font-semibold"
                  >
                    Explore Collection
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-forest/5">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-5 px-8 py-6">
                      {/* Thumbnail */}
                      <div className="relative w-20 h-28 flex-shrink-0 bg-stone-100 overflow-hidden shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                        <div>
                          <p className="text-[9px] tracking-[0.25em] text-gold uppercase font-semibold mb-1">
                            {item.category}
                          </p>
                          <h3 className="font-serif text-forest text-sm leading-snug pr-6 line-clamp-2">
                            {item.name}
                          </h3>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Qty Controls */}
                          <div className="flex items-center border border-forest/15 divide-x divide-forest/15">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-forest/5 text-forest transition-colors"
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="w-8 h-7 flex items-center justify-center text-xs font-medium text-forest">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-forest/5 text-forest transition-colors"
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>

                          <p className="font-serif text-sm text-forest font-semibold">
                            Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="self-start mt-0.5 text-forest/20 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-forest/8 px-8 py-8 bg-white/60 backdrop-blur-sm">
                {/* Subtotal */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-forest/50 font-semibold">Subtotal</span>
                  <span className="font-serif text-xl text-forest font-bold">Rp {subtotal.toLocaleString("id-ID")}</span>
                </div>
                <p className="text-[10px] text-forest/30 mb-6 tracking-wider">Taxes & shipping calculated at checkout</p>

                {/* CTA */}
                <Link href="/checkout" onClick={toggleDrawer} className="block">
                  <button className="w-full bg-forest text-bone py-4 text-[11px] tracking-[0.25em] font-bold uppercase hover:bg-gold transition-colors duration-300 shadow-lg">
                    Proceed to Checkout
                  </button>
                </Link>
                <button
                  onClick={toggleDrawer}
                  className="w-full mt-3 text-[10px] text-forest/40 hover:text-forest tracking-widest uppercase transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
