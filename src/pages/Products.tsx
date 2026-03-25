import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

import AngelsShare from "../assets/products-images/AngelsShare.png";
import Delina from "../assets/products-images/Delina.avif";
import ErbaPura from "../assets/products-images/ErbaPura.png";
import Philosykos from "../assets/products-images/Philosykos.png";
import Santal from "../assets/products-images/Santal.png";
import SideEffect from "../assets/products-images/SideEffect.png";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  category: string;
  note: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Angel's Share",
    brand: "Kilian Paris",
    price: "2.100",
    category: "The Liquors",
    note: "Conhaque, Fava Tonka, Carvalho",
    image: AngelsShare,
  },
  {
    id: 2,
    name: "Delina",
    brand: "Parfums de Marly",
    price: "1.950",
    category: "Feminine Excellence",
    note: "Rosa Turca, Lichia, Ruibarbo",
    image: Delina,
  },
  {
    id: 3,
    name: "Erba Pura",
    brand: "Xerjoff",
    price: "1.890",
    category: "Velvet Collection",
    note: "Frutas Cítricas, Âmbar, Almíscar",
    image: ErbaPura,
  },
  {
    id: 4,
    name: "Philosykos",
    brand: "Diptyque",
    price: "1.250",
    category: "Artistic Niche",
    note: "Folha de Figueira, Madeira",
    image: Philosykos,
  },
  {
    id: 5,
    name: "Santal 33",
    brand: "Le Labo",
    price: "1.400",
    category: "Cult Classic",
    note: "Sândalo, Cedro, Cardamomo",
    image: Santal,
  },
  {
    id: 6,
    name: "Side Effect",
    brand: "Initio Parfums Prives",
    price: "2.300",
    category: "The Carnal Blends",
    note: "Canela, Rum, Tabaco",
    image: SideEffect,
  },
];

export default function Products() {
  return (
    <section id="products" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-20 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="flex flex-col items-center mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-text uppercase tracking-[0.6em] text-[10px] md:text-xs mb-6 block border-b border-gold/20 pb-2">
            Smell Noir Collection
          </span>
          <h2 className="text-white font-title text-6xl md:text-9xl leading-tight">
            Curadoria <br />
            <span className="text-gold italic font-light ml-4 md:ml-12 text-5xl md:text-8xl">Exclusiva</span>
          </h2>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="group relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:border-gold/40 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

              <motion.img
                src={product.image}
                alt={product.name}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  filter: "brightness(1.1) drop-shadow(0 25px 50px rgba(0,0,0,0.9))" 
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-[85%] h-[85%] object-contain z-20 mix-blend-lighten drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              />

              <div className="absolute top-6 right-6 z-30 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <span className="text-gold font-bold text-sm">R$ {product.price}</span>
              </div>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-500 bg-gold hover:bg-white text-black font-bold py-4 px-8 rounded-xl flex items-center gap-3 shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              >
                <ShoppingBag size={18} />
                <span className="uppercase tracking-tighter text-xs">Explorar Fragrância</span>
              </motion.button>
            </div>

            <div className="mt-10 px-2">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h4 className="text-gold font-text text-[10px] uppercase tracking-[0.4em] font-black mb-1">
                    {product.brand}
                  </h4>
                  <h3 className="text-white font-title text-4xl italic group-hover:text-gold transition-colors duration-500">
                    {product.name}
                  </h3>
                </div>
                <div className="h-[1px] flex-grow mx-6 bg-white/10 mb-4 hidden md:block" />
                <p className="text-white/40 font-text text-[10px] uppercase tracking-widest text-right">
                  {product.category}
                </p>
              </div>
              
              <p className="text-secondary/60 font-text text-xs leading-relaxed italic border-l border-gold/30 pl-4 py-1">
                Notas de <span className="text-secondary/90">{product.note}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}