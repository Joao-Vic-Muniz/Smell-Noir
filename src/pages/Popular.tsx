import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import blackOrchid from '../assets/Black Orchid.webp';
import babycat from '../assets/Babycat.png';
import aventus from '../assets/Aventus.png';
import herod from '../assets/Herod.webp';
import baccarat from '../assets/Baccarat.png';

const PERFUMES = [
    {
        id: 1,
        name: "Black Orchid",
        brand: "Tom Ford",
        color: "from-purple-900/40",
        accent: "text-purple-400",
        glow: "bg-purple-500/20",
        essence: "Especiarias • Floral Escuro",
        description: "Uma colisão magnética de orquídeas negras e especiarias raras. A personificação do mistério absoluto.",
        image: blackOrchid,
        scale: 0.85 
    },
    {
        id: 2,
        name: "Babycat",
        brand: "YSL",
        color: "from-amber-900/40",
        accent: "text-amber-500",
        glow: "bg-amber-500/20",
        essence: "Camurça • Baunilha • Incenso",
        description: "Uma interpretação indomável. Onde o calor da baunilha encontra o perigo do incenso selvagem.",
        image: babycat,
        scale: 1.05
    },
    {
        id: 3,
        name: "Aventus",
        brand: "Creed",
        color: "from-blue-900/40",
        accent: "text-blue-400",
        glow: "bg-blue-500/20",
        essence: "Bétula • Abacaxi • Couro",
        description: "A essência do triunfo. Uma alquimia poderosa desenhada para quem escreve sua própria história.",
        image: aventus,
        scale: 1.0
    },
    {
        id: 4,
        name: "Herod",
        brand: "Parfums de Marly",
        color: "from-red-900/40",
        accent: "text-red-500",
        glow: "bg-red-600/20",
        essence: "Tabaco • Canela • Baunilha",
        description: "Uma ode à herança da alta perfumaria. Quente, enfumaçado e majestoso como um eco de sofisticação.",
        image: herod,
        scale: 0.85
    },
    {
        id: 5,
        name: "Baccarat Rouge",
        brand: "Maison Francis Kurkdjian",
        color: "from-rose-900/40",
        accent: "text-rose-500",
        glow: "bg-rose-500/20",
        essence: "Âmbar • Jasmim • Açafrão",
        description: "Luminoso e denso. Uma assinatura olfativa poética que flutua como um cristal sob o sol da meia-noite.",
        image: baccarat,
        scale: 1.0
    }
];

export default function Popular() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % PERFUMES.length);
    const prev = () => setIndex((prev) => (prev - 1 + PERFUMES.length) % PERFUMES.length);

    return (
        <section id="popular" className="relative w-full min-h-screen bg-[#030303] overflow-hidden flex items-center justify-center py-32 px-6 md:px-20 transition-colors duration-1000">
            
            <AnimatePresence mode="wait">
                <motion.div 
                    key={`bg-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className={`absolute inset-0 bg-gradient-to-tr ${PERFUMES[index].color} to-transparent pointer-events-none`}
                />
            </AnimatePresence>

            <div className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <AnimatePresence mode="wait">
                <motion.div 
                    key={`glow-${index}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] ${PERFUMES[index].glow} blur-[180px] rounded-full pointer-events-none`}
                />
            </AnimatePresence>

            <div className="relative z-10 w-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <div className="lg:col-span-6 flex justify-center items-center h-[500px] md:h-[850px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={PERFUMES[index].id}
                            initial={{ opacity: 0, scale: 0.5, rotateY: -90, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: PERFUMES[index].scale, rotateY: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.2, rotateY: 90, filter: "blur(20px)" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full h-full flex items-center justify-center perspective-[2000px]"
                        >
                            <motion.img
                                src={PERFUMES[index].image}
                                alt={PERFUMES[index].name}
                                animate={{ 
                                    y: [0, -30, 0],
                                    rotateZ: [-1, 1, -1]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="max-h-[95%] w-auto object-contain drop-shadow-[0_80px_120px_rgba(0,0,0,1)] z-20"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={PERFUMES[index].id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <Sparkles className={`${PERFUMES[index].accent} w-6 h-6 animate-pulse`} />
                                <span className={`font-text tracking-[0.5em] text-xl md:text-2xl uppercase font-bold ${PERFUMES[index].accent}`}>
                                    {PERFUMES[index].brand}
                                </span>
                            </div>
                            
                            <h2 className="text-white font-title text-7xl md:text-[11rem] italic leading-[0.75] mb-10 tracking-tighter drop-shadow-2xl">
                                {PERFUMES[index].name}
                            </h2>
                            
                            <p className="text-gray-300 font-text text-2xl md:text-4xl leading-tight mb-12 max-w-2xl border-l-4 border-white/10 pl-10 italic opacity-80">
                                {PERFUMES[index].description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-20">
                                {PERFUMES[index].essence.split(' • ').map((tag) => (
                                    <span key={tag} className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-text text-lg uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center gap-12">
                        <button 
                            onClick={prev} 
                            className="group p-8 border-2 border-white/5 rounded-2xl transition-all duration-500 hover:border-white/40 hover:bg-white/5 active:scale-90"
                        >
                            <ChevronLeft size={40} className="text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        </button>
                        
                        <div className="relative flex items-center justify-center w-24 h-24">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-t-2 border-r-2 border-white/10 rounded-full"
                            />
                            <span className="text-white font-title italic text-5xl">0{index + 1}</span>
                        </div>

                        <button 
                            onClick={next} 
                            className="group p-8 border-2 border-white/5 rounded-2xl transition-all duration-500 hover:border-white/40 hover:bg-white/5 active:scale-90"
                        >
                            <ChevronRight size={40} className="text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>

            <motion.h3 
                key={`label-${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.03, x: 0 }}
                className="absolute -bottom-16 right-12 text-[18rem] font-title italic text-white whitespace-nowrap pointer-events-none select-none uppercase"
            >
                {PERFUMES[index].name}
            </motion.h3>
        </section>
    );
}