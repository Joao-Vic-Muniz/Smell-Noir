import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="relative w-full min-h-screen bg-bg flex flex-col items-center justify-center py-32 px-6">
            
            {/* Fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[160px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl w-full">
                {/* Cabeçalho */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-gold font-text tracking-[0.3em] text-2xl mb-6 block">A Essência do Instinto</span>
                    <h2 className="text-primary font-title text-6xl md:text-8xl italic leading-tight font-bold">
                        Onde a Noite se torna<br />  Eterna
                    </h2>
                </motion.div>

                {/* Conteúdo */}
                <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-gold font-title text-3xl italic mb-6">Nossa Herança</h3>
                        <p className="text-secondary font-text text-lg leading-relaxed opacity-80">
                            A <span className="text-primary italic">Smell Noir</span> nasceu do desejo de capturar o efêmero. Não somos apenas uma curadoria de fragrâncias; somos guardiões de memórias olfativas. Cada frasco em nossa coleção é escolhido para representar um capítulo de poder, mistério e sofisticação absoluta.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-gold font-title text-3xl italic mb-6">A Curadoria</h3>
                        <p className="text-secondary font-text text-lg leading-relaxed opacity-80">
                            Trabalhamos exclusivamente com as <span className="italic">maisons</span> mais prestigiadas do mundo. Nossa busca nos leva a essências raras, de orquídeas negras a âmbares milenares, garantindo que sua presença seja sentida muito antes de qualquer palavra ser dita.
                        </p>
                        
                        {/* Detalhe */}
                        <div className="mt-12 flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-gold/50"></div>
                            <span className="text-gold font-title italic text-xl">Instinto & Sofisticação</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}