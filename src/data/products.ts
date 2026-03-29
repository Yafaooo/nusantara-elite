import { Product } from "@/context/CartContext";

// ALL IDS MANUALLY VERIFIED. NO MORE KEYBOARDS. NO MORE CRASHES.
export const products: Product[] = [
  {
    id: "p1",
    name: "Royal Parang Silk Batik",
    price: 3500000,
    category: "Batik Silk",
    image: "https://images.unsplash.com/photo-1601002244243-c07a3891795c?q=80&w=1080&auto=format&fit=crop", 
    description: "Authentic hand-drawn Parang motif on premium silk. Crafted in Yogyakarta by master artisans spanning 3 months of meticulous detailing."
  },
  {
    id: "p2",
    name: "Classic Mega Mendung Tunic",
    price: 2800000,
    category: "Batik Silk",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1080&auto=format&fit=crop", 
    description: "Cirebon's iconic cloud motif rendered in deep indigo and bone white. A statement of elegance and heritage."
  },
  {
    id: "p3",
    name: "Gayo Golden Peaberry",
    price: 450000,
    category: "Premium Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1080&auto=format&fit=crop", 
    description: "Extremely rare peaberry beans sourced from the highlands of Aceh. Offers complex notes of dark chocolate, wild berries, and a hint of spice."
  },
  {
    id: "p4",
    name: "Toraja Sapan Reserve",
    price: 420000,
    category: "Premium Coffee",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1080&auto=format&fit=crop", 
    description: "A bold, full-bodied coffee with earthy undertones and a syrupy finish, harvested from ancient volcanic soil in Sulawesi."
  },
  {
    id: "p5",
    name: "Kasongan Terracotta Vase",
    price: 1200000,
    category: "Artisan Decor",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1080&auto=format&fit=crop", 
    description: "Minimalist yet rustic, this hand-molded terracotta vase from Kasongan adds a warm, earthy touch to any modern living space."
  },
  {
    id: "p6",
    name: "Jepara Teak Wood Bowl",
    price: 850000,
    category: "Artisan Decor",
    // Fixed failure 404 ID with a highly stable wooden craft photo
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1080&auto=format&fit=crop", 
    description: "Carved from a single block of sustainably sourced Jepara teak wood. Perfect as a centerpiece or functional serving dish."
  }
];
