export default function Home() {
    return (
        <section 
            id="home"
            className="relative w-full h-screen bg-bg overflow-hidden flex flex-col items-center justify-center p-6"
        >
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent/30 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-5%] right-[10%] w-[450px] h-[450px] bg-accent/20 blur-[130px] rounded-full pointer-events-none"></div>
            
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-[1px] bg-gold mb-10 opacity-50"></div>

                <h1 className="text-primary font-title text-7xl md:text-9xl italic leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    Smell Noir
                </h1>

                <p className="text-secondary font-text text-xl md:text-2xl max-w-2xl mt-8 leading-relaxed tracking-wide">
                    Onde o instinto encontra a sofisticação. <br /> 
                    <span className="text-gold/90 italic text-lg md:text-xl block mt-2">Deixe sua marca no escuro.</span>
                </p>

                <button className="mt-14 px-12 py-4 bg-gold hover:bg-button text-bg font-text text-2xl cursor-pointer font-bold transition-all duration-500 rounded-full shadow-2xl shadow-gold/5 hover:scale-105 active:scale-95">
                    Descobrir Fragrâncias
                </button>
            </div>
        </section>
    )
}