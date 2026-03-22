import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

// Importação das imagens com base no caminho da sua print
import AngelsShare from "../assets/products-images/AngelsShare.png";
import Delina from "../assets/products-images/Delina.avif";
import ErbaPura from "../assets/products-images/ErbaPura.png";
import Philosykos from "../assets/products-images/Philosykos.png";
import Santal from "../assets/products-images/Santal.png";
import SideEffect from "../assets/products-images/SideEffect.png";

// Interface tipada para os produtos
interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  category: string;
  note: string;
  image: string;
}

// Lista de produtos enriquecida
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
    <section id="products" className="relative w-full bg-bg py-32 px-6 md:px-20 overflow-hidden">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col items-center mb-24 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-text uppercase tracking-[0.8em] text-xs md:text-sm mb-4"
        >
          Sua Assinatura Olfativa
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-title text-5xl md:text-8xl italic"
        >
          Curadoria <span className="text-gold not-italic">Exclusiva</span>
        </motion.h2>
      </div>

      {/* Grid de Produtos Otimizado */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Card Visual Refinado */}
            <div className="relative aspect-[4/5] bg-white/[0.01] border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center transition-all duration-1000 group-hover:border-gold/30">
              
              {/* Efeito de Gradiente/Luz no Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
              
              {/* BRILHO DOURADO SUTIL ATRÁS DO FRASCO */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/10 blur-[100px] rounded-full group-hover:blur-[120px] transition-all duration-1000 pointer-events-none" />

              {/* Imagem do Produto */}
              <motion.img
                src={product.image}
                alt={product.name}
                // 'mix-blend-lighten' tenta remover fundos brancos/xadrez
                // 'p-12' dá um bom respiro
                className="w-full h-full object-contain z-20 mix-blend-lighten p-12 drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Botão Adicionar (Melhorado) */}
              <button className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-30 bg-gold text-bg px-10 py-4 rounded-full flex items-center gap-3 font-text uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors shadow-2xl">
                <ShoppingBag size={16} />
                Adicionar
              1</button>
            </div>

            {/* Informações do Produto Refinadas */}
            <div className="mt-8 flex justify-between items-start pl-4 pr-4">
              <div className="max-w-[70%]">
                <p className="text-gold font-text text-xs uppercase tracking-[0.3em] mb-3 font-bold">
                  {product.brand}
                </p>
                <h3 className="text-primary font-title text-3xl md:text-4xl italic mb-3">
                  {product.name}
                </h3>
                <p className="text-secondary/70 font-text text-[11px] md:text-xs uppercase tracking-widest leading-relaxed">
                  {product.category} • <span className="text-secondary/40">{product.note}</span>
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-primary font-text text-xl md:text-2xl font-bold tracking-tighter">
                  R$ {product.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fundo Decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/5 blur-[170px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}