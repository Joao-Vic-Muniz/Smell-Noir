export default function Catalog() {
    return (
        <section id="catalog" className="relative w-full min-h-screen bg-bg overflow-hidden flex flex-col items-center pt-24 px-6">
            {/* Mancha de fundo exclusiva para esta seção */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <header className="relative z-10 text-center mb-20">
                <span className="text-gold font-text tracking-[0.5em] uppercase text-[10px] mb-4 block">Coleção Exclusiva</span>
                <h2 className="text-primary font-title text-5xl md:text-7xl italic">Nossas Fragrâncias</h2>
            </header>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
                {/* Exemplo de Card de Produto */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="group bg-card/20 backdrop-blur-md border border-accent/20 p-8 rounded-[30px] flex flex-col items-center transition-all duration-500 hover:border-gold/30 hover:-translate-y-2">
                        <div className="w-full aspect-[3/4] bg-accent/20 rounded-2xl mb-8 overflow-hidden relative">
                             {/* Placeholder para a imagem do perfume */}
                             <div className="absolute inset-0 flex items-center justify-center text-accent font-title italic text-xl">Imagem do Produto</div>
                        </div>
                        <h3 className="text-primary font-title text-3xl mb-2">Noir N° {item}</h3>
                        <p className="text-secondary font-text text-[10px] uppercase tracking-widest mb-6 text-center italic">Amadeirado • Intenso</p>
                        <button className="text-gold font-text text-[11px] uppercase tracking-widest border-b border-gold/0 group-hover:border-gold transition-all duration-300">Ver Detalhes</button>
                    </div>
                ))}
            </div>
        </section>
    )
}