import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const xRight = useTransform(scrollYProgress, [0, 1], [200, -200]);

    return (
        <section 
            id="about" 
            ref={containerRef}
            className="relative w-full min-h-[150vh] bg-[#050505] overflow-hidden py-40 px-6 md:px-12 flex flex-col items-center"
        >
            <motion.h2 
                style={{ x: xLeft }}
                className="absolute top-20 left-10 md:left-20 text-[4rem] md:text-[8rem] font-title italic text-gold/50 whitespace-nowrap leading-none select-none tracking-tighter"
            >
                INSTINTO SELVAGEM
            </motion.h2>
            
            <motion.h2 
                style={{ x: xRight }}
                className="absolute bottom-40 right-10 md:right-20 text-[4rem] md:text-[8rem] font-title italic text-gold/50 whitespace-nowrap leading-none select-none tracking-tighter"
            >
                ELEGÂNCIA PURA
            </motion.h2>

            <div className="relative z-10 max-w-7xl w-full flex flex-col gap-40">
                
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="mb-12"
                    >
                        <div className="w-20 h-[2px] bg-gold mx-auto mb-8"></div>
                        <span className="text-gold font-text uppercase text-lg md:text-2xl tracking-[0.8em]">
                            Manifesto
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-primary font-title text-5xl md:text-[10rem] italic leading-[0.9] mb-12"
                    >
                        Onde a Noite se torna <br /> 
                        <span className="text-gold not-italic font-bold">Inesquecível</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 border border-gold/20 rounded-2xl group-hover:border-gold/50 transition-colors duration-700"></div>
                        <div className="relative p-12 bg-accent/5 backdrop-blur-xl rounded-2xl">
                            <h3 className="text-gold font-title text-4xl md:text-5xl italic mb-10">Nossa Herança</h3>
                            <p className="text-secondary font-text text-xl md:text-3xl leading-relaxed opacity-90">
                                A <span className="text-primary">Smell Noir</span> nasceu do desejo de capturar o efêmero. 
                                Não somos uma curadoria; somos <span className="text-gold italic">guardiões de memórias</span>.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <h3 className="text-gold font-title text-4xl md:text-5xl italic">A Curadoria</h3>
                        <p className="text-secondary/80 font-text text-lg md:text-2xl leading-relaxed border-l-2 border-gold/30 pl-8">
                            Trabalhamos apenas com o impossível. Essências raras, extraídas sob condições únicas, 
                            garantindo que sua presença seja sentida antes mesmo da primeira palavra.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div>
                                <h4 className="text-gold font-title text-5xl md:text-7xl italic">12</h4>
                                <p className="text-secondary/50 font-text text-base md:text-lg uppercase tracking-widest">Maisons</p>
                            </div>
                            <div>
                                <h4 className="text-gold font-title text-5xl md:text-7xl italic">Pure</h4>
                                <p className="text-secondary/50 font-text text-base md:text-lg uppercase tracking-widest">Essência</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center py-20"
                >
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-gold/10 blur-[100px] absolute rounded-full"
                    ></motion.div>
                    
                    <h3 className="relative z-10 text-primary font-title text-4xl md:text-7xl italic text-center mb-12">
                        Pronto para deixar sua <br /> <span className="text-gold">Assinatura?</span>
                    </h3>
                    
                    <button className="relative z-10 px-10 md:px-16 py-4 md:py-6 border-2 border-gold text-gold font-text text-lg md:text-xl uppercase tracking-[0.3em] hover:bg-gold hover:text-bg transition-all duration-500 rounded-full group overflow-hidden">
                        <span className="relative z-10">Explorar Coleção</span>
                        <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}