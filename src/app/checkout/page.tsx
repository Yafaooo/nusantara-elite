"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const order = {
        id: `NE-${Date.now()}`,
        date: new Date().toISOString(),
        customer: formData,
        items: cart,
        total: subtotal,
        status: "Processing"
      };

      // Save to localStorage 'orders'
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

      setSuccess(true);
      clearCart();
      setLoading(false);
    }, 1500);
  };

  if (!isClient) return null;

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bone text-forest px-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 shadow-2xl max-w-lg text-center border-t-4 border-gold"
        >
          <h1 className="text-4xl font-serif text-gold mb-6 italic">Thank You</h1>
          <p className="text-lg leading-relaxed mb-8 font-light">
            Your exclusive order has been successfully placed. Our artisans are preparing your masterpiece.
          </p>
          <button 
            onClick={() => router.push("/")}
            className="border-b border-forest tracking-[0.2em] font-bold text-xs hover:text-gold hover:border-gold transition-colors pb-1 uppercase"
          >
            RETURN HOME
          </button>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center bg-bone text-forest px-4">
         <h1 className="text-3xl font-serif mb-6">Your bag is empty.</h1>
         <button 
            onClick={() => router.push("/")}
            className="tracking-widest underline hover:text-gold transition-colors text-sm"
          >
            DISCOVER COLLECTIONS
          </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bone pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-forest mb-12 uppercase tracking-wide">
          Secure <span className="text-gold italic">Checkout</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form Section */}
          <div className="flex-1">
            <h2 className="text-sm tracking-[0.2em] uppercase text-forest/60 mb-8 border-b border-forest/10 pb-4">Shipping Information</h2>

            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-forest/80">First Name</label>
                  <input required name="firstName" onChange={handleChange} className="w-full bg-transparent border-b border-forest/30 pb-2 focus:outline-none focus:border-gold transition-colors font-serif" type="text" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-forest/80">Last Name</label>
                  <input required name="lastName" onChange={handleChange} className="w-full bg-transparent border-b border-forest/30 pb-2 focus:outline-none focus:border-gold transition-colors font-serif" type="text" />
                </div>
              </div>
              
              <div>
                 <label className="block text-xs uppercase tracking-wider mb-2 text-forest/80">Email Address</label>
                 <input required name="email" onChange={handleChange} className="w-full bg-transparent border-b border-forest/30 pb-2 focus:outline-none focus:border-gold transition-colors font-serif" type="email" />
              </div>

              <div>
                 <label className="block text-xs uppercase tracking-wider mb-2 text-forest/80">Street Address</label>
                 <input required name="address" onChange={handleChange} className="w-full bg-transparent border-b border-forest/30 pb-2 focus:outline-none focus:border-gold transition-colors font-serif" type="text" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-forest/80">City</label>
                  <input required name="city" onChange={handleChange} className="w-full bg-transparent border-b border-forest/30 pb-2 focus:outline-none focus:border-gold transition-colors font-serif" type="text" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-forest/80">Postal Code</label>
                  <input required name="postalCode" onChange={handleChange} className="w-full bg-transparent border-b border-forest/30 pb-2 focus:outline-none focus:border-gold transition-colors font-serif" type="text" />
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="w-full lg:w-[450px]">
            <div className="bg-white p-8 shadow-xl relative top-0 lg:sticky lg:top-32 border border-forest/5">
              <h2 className="text-sm tracking-[0.2em] uppercase text-forest/60 mb-8 border-b border-forest/10 pb-4">Order Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-4 hide-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="relative w-16 h-20 flex-shrink-0 bg-stone-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="font-serif text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-forest/60 my-1">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-forest/10 pt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-forest/70">Subtotal</span>
                  <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest/70">Complimentary Shipping</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between font-serif text-xl border-t border-forest/10 pt-4 mt-2 font-bold text-forest">
                  <span>TOTAL</span>
                  <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                </div>
              </div>

              <button 
                type="submit" 
                form="checkout-form"
                disabled={loading}
                className="w-full mt-10 bg-forest text-bone py-4 tracking-widest text-sm font-semibold hover:bg-gold transition-colors disabled:bg-forest/50 disabled:cursor-not-allowed shadow-md"
              >
                {loading ? "PROCESSING..." : "PLACE ORDER"}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
