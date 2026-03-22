import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-8 md:px-20 
                ${
                  isScrolled
                    ? "h-16 bg-bg/60 backdrop-blur-xl border-b border-gold/10"
                    : "h-24 bg-transparent"
                }`}
    >
      <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between">
        <div className="flex-1">
          <a href="#home" className="group flex items-center gap-2">
            <motion.div
              animate={{ rotate: isScrolled ? 180 : 0 }}
              className="w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
            />
            <h2 className="font-title text-primary text-2xl md:text-3xl italic tracking-tighter transition-all duration-500 group-hover:text-gold font-bold">
              Smell Noir
            </h2>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {[
            { name: "Início", href: "#home" },
            { name: "Populares", href: "#popular" },
            { name: "Sobre", href: "#about" },
            { name: "Produtos", href: "#products" },
            { name: "Contato", href: "#contact" },
          ].map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5 }}
              className="group relative font-text text-secondary/70 text-sm md:text-lg uppercase tracking-[0.2em] hover:text-primary transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500 ease-out" />
            </motion.a>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden px-6 py-2 border border-gold/30 rounded-full transition-all duration-500 hover:border-gold flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gold translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />

            <ShoppingBag
              size={24}
              className="relative z-10 text-gold group-hover:text-bg transition-colors duration-500"
              strokeWidth={1.5}
            />

            <span className="relative z-10 font-text text-gold group-hover:text-bg text-xl uppercase tracking-widest font-bold transition-colors duration-500">
              Shop
            </span>
          </motion.button>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-all duration-1000 ${isScrolled ? "w-full opacity-100" : "w-0 opacity-0"}`}
      />
    </motion.nav>
  );
}
