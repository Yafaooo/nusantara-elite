export default function Footer() {
  const footerLinks = {
    "Collections": ["Batik Silk", "Premium Coffee", "Artisan Decor", "New Arrivals"],
    "Company": ["Our Story", "Artisans", "Exhibitions", "Press"],
    "Support": ["Client Services", "Shipping & Returns", "Authenticity", "FAQ"],
  };

  return (
    <footer className="bg-forest text-bone relative overflow-hidden">
      {/* Top section */}
      <div className="border-b border-gold/15 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif mb-4">
              Nusantara <span className="text-gold italic">Elite</span>
            </h2>
            <p className="text-bone/50 text-sm font-light leading-relaxed mb-6">
              Bringing Indonesia&apos;s finest craftsmanship to discerning collectors and connoisseurs worldwide.
            </p>
            <div className="flex space-x-4">
              {["IG", "FB", "TW", "YT"].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 border border-bone/20 flex items-center justify-center text-[10px] tracking-wider hover:border-gold hover:text-gold transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[10px] tracking-[0.3em] text-gold uppercase font-semibold mb-6">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-bone/50 hover:text-bone text-sm font-light transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-bone/30 tracking-wider space-y-3 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Nusantara Elite. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-bone/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bone/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-bone/60 transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
