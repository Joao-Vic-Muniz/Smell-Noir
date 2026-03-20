export default function About() {
    return (
        <section id="about" className="relative w-full min-h-screen bg-bg overflow-hidden flex items-center justify-center py-24 px-6">
            {/* Mancha de fundo contrastante */}
            <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-accent/30 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl flex flex-col items-center text-center">
                <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold mb-12"></div>
                
                <h2 className="text-primary font-title text-6xl md:text-8xl italic mb-10 leading-tight">
                    A Arte de Transformar <br /> Noite em Essência
                </h2>

                <div className="grid md:grid-cols-2 gap-12 text-left">
                    <p className="text-secondary font-text text-lg leading-relaxed">
                        Nascida sob o véu do mistério, a <span className="text-gold italic">Smell Noir</span> não cria apenas perfumes. Nós capturamos momentos efêmeros e os transformamos em memórias olfativas inesquecíveis, onde cada nota conta uma história de poder e elegância.
                    </p>
                    <p className="text-secondary font-text text-lg leading-relaxed">
                        Nossa curadoria utiliza as matérias-primas mais raras do mundo, combinando o artesanato tradicional francês com a ousadia da modernidade. Para quem sabe que o silêncio e a presença andam juntos na escuridão.
                    </p>
                </div>

                <div className="mt-16 flex items-center gap-6">
                    <div className="w-12 h-px bg-gold/50"></div>
                    <span className="text-gold font-title italic text-2xl tracking-wide">Since 2026</span>
                    <div className="w-12 h-px bg-gold/50"></div>
                </div>
            </div>
        </section>
    )
}