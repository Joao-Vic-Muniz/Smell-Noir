import HomeBg from '../assets/Home-Bg.jpg'

export default function Home() {
    return (
        <section 
            id="home"
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-6"
            style={{ backgroundImage: `url(${HomeBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-4xl h-[50%] 
                /* Usando sua variável bg-card com opacidade + Blur */
                bg-card/40 backdrop-blur-xl 
                /* Borda sutil usando sua cor accent */
                border border-accent/30 rounded-[40px]
                /* Efeito de Sombra e Brilho (Glow) */
                shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9),0_0_20px_rgba(197,160,89,0.1)]
                flex flex-col items-center justify-center p-12 text-center"
            >
                {/* Linha dourada de detalhe */}
                <div className="w-12 h-[2px] bg-gold mb-8 opacity-60"></div>

                <h1 className="text-primary font-title text-7xl md:text-9xl italic leading-none drop-shadow-2xl">
                    Smell Noir
                </h1>

                <p className="text-secondary font-text text-xl md:text-2xl max-w-2xl leading-relaxed mt-6">
                    Onde o instinto encontra a sofisticação. <br /> 
                    <span className="text-gold/80 italic text-lg md:text-xl">Deixe sua marca no escuro.</span>
                </p>

                {/* Botão  */}
                <button className="mt-10 px-10 py-3 bg-gold hover:bg-button text-bg font-text uppercase tracking-[0.3em] text-2xl transition-all duration-300 rounded-full shadow-lg shadow-gold/10">
                    Descobrir Fragrâncias
                </button>
            </div>
        </section>
    )
}