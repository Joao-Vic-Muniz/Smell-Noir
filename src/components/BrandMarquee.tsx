import { motion } from 'framer-motion';

const BRANDS = [
    "Tom Ford", "Chanel", "Dior", "Yves Saint Laurent", 
    "Creed", "Parfums de Marly", "Maison Francis Kurkdjian", 
    "Byredo", "Le Labo", "Hermès", "Givenchy", "Gucci"
];

export default function BrandMarquee() {
    return (
        <div className="relative w-full bg-bg overflow-hidden border-y border-accent/10 mt-18">
            {/* Efeito de desfoque nas bordas */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-bg via-transparent to-bg"></div>
            
            <motion.div 
                className="flex whitespace-nowrap gap-20 items-center"
                animate={{ x: [0, -2500] }} 
                transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
            >
                {[...BRANDS, ...BRANDS].map((brand, i) => (
                    <span 
                        key={i} 
                        className="text-secondary/90 font-text text-xl uppercase tracking-[0.6em] hover:text-gold transition-colors duration-500 cursor-default"
                    >
                        {brand}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}