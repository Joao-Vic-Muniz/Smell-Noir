import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Imports das imagens
import blackOrchid from '../assets/Black Orchid.webp'
import babycat from '../assets/Babycat.png'
import aventus from '../assets/Aventus.png'
import herod from '../assets/Herod.webp'
import baccarat from '../assets/Baccarat.png'

const PERFUMES = [
    {
        id: 1,
        name: "Black Orchid",
        brand: "Tom Ford",
        essence: "Especiarias • Floral Escuro",
        description: "Uma colisão magnética de orquídeas negras e especiarias raras. A personificação do mistério absoluto e da elegância que não pede licença.",
        image: blackOrchid,
        scale: 0.85 
    },
    {
        id: 2,
        name: "Babycat",
        brand: "YSL",
        essence: "Camurça • Baunilha • Incenso",
        description: "Uma interpretação indomável. Onde o calor da baunilha encontra o perigo do incenso em um rastro cinematográfico e selvagem.",
        image: babycat,
        scale: 1.05
    },
    {
        id: 3,
        name: "Aventus",
        brand: "Creed",
        essence: "Bétula • Abacaxi • Couro",
        description: "A essência do triunfo. Uma alquimia poderosa desenhada para quem escreve sua própria história com confiança e vigor.",
        image: aventus,
        scale: 1.0
    },
    {
        id: 4,
        name: "Herod",
        brand: "Parfums de Marly",
        essence: "Tabaco • Canela • Baunilha",
        description: "Uma ode à herança da alta perfumaria. Quente, enfumaçado e majestoso; um eco de sofisticação que atravessa séculos.",
        image: herod,
        scale: 0.85
    },
    {
        id: 5,
        name: "Baccarat Rouge",
        brand: "Maison Francis Kurkdjian",
        essence: "Âmbar • Jasmim • Açafrão",
        description: "Luminoso e denso. Uma assinatura olfativa poética que flutua sobre a pele como um cristal lapidado pelo sol da meia-noite.",
        image: baccarat,
        scale: 1.0
    }
];

export default function Catalog() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % PERFUMES.length);
    const prev = () => setIndex((prev) => (prev - 1 + PERFUMES.length) % PERFUMES.length);

    return (
        <section id="catalog" className="relative w-full min-h-screen bg-bg overflow-hidden flex items-center justify-center pt-24 pb-12 px-6 md:px-16">
            
            {/* Background Effects */}
            <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/20 blur-[130px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 flex justify-center items-center h-[500px] md:h-[750px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={PERFUMES[index].id}
                            initial={{ opacity: 0, scale: 0.7, x: -100, rotate: -5 }}
                            animate={{ opacity: 1, scale: PERFUMES[index].scale, x: 0, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.7, x: 100, rotate: 5 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <motion.img
                                src={PERFUMES[index].image}
                                alt={PERFUMES[index].name}
                                animate={{ y: [0, -20, 0] }}
                                transition={{ 
                                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="max-h-[90%] w-auto object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.9)] z-20"
                            />
                            <div className="absolute w-[70%] h-[70%] bg-gold/10 blur-[120px] rounded-full -z-10"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={PERFUMES[index].id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-gold font-text tracking-widest text-xl mb-8 block opacity-70">
                                {PERFUMES[index].essence}
                            </span>
                            
                            <h2 className="text-primary font-title text-6xl md:text-8xl xl:text-9xl italic leading-[0.85] mb-6">
                                {PERFUMES[index].name}
                            </h2>
                            
                            <p className="text-gold/50 font-text text-xl uppercase tracking-[0.5em] mb-10 pl-1">
                                {PERFUMES[index].brand}
                            </p>

                            <p className="text-secondary font-text text-lg md:text-xl max-w-lg leading-relaxed mb-14 opacity-80 border-l border-gold/20 pl-6">
                                {PERFUMES[index].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* NAVEGAÇÃO */}
                    <div className="flex items-center gap-12">
                        <button onClick={prev} className="group p-6 border border-accent/20 rounded-full transition-all duration-500 hover:border-gold hover:scale-110 active:scale-95">
                            <svg className="w-6 h-6 stroke-secondary group-hover:stroke-gold transition-colors" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        
                        <div className="flex flex-col items-center">
                            <span className="text-gold font-title italic text-4xl leading-none">0{index + 1}</span>
                            <div className="w-10 h-[1px] bg-accent/40 my-3"></div>
                            <span className="text-secondary/30 font-text text-[10px] tracking-widest uppercase italic">Essence</span>
                        </div>

                        <button onClick={next} className="group p-6 border border-accent/20 rounded-full transition-all duration-500 hover:border-gold hover:scale-110 active:scale-95">
                            <svg className="w-6 h-6 stroke-secondary group-hover:stroke-gold transition-colors" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}