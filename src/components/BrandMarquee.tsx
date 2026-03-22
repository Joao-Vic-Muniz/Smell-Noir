import { motion } from 'framer-motion';

const BRANDS = [
    "Tom Ford", "Chanel", "Dior", "Yves Saint Laurent", 
    "Creed", "Parfums de Marly", "Maison Francis Kurkdjian", 
    "Byredo", "Le Labo", "Hermès", "Givenchy", "Gucci"
];

export default function BrandMarquee() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            
            className="relative w-full bg-bg overflow-hidden py-6 my-12 select-none"
        >
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 z-10 pointer-events-none 
                            bg-gradient-to-r from-bg via-bg/80 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 z-10 pointer-events-none 
                            bg-gradient-to-l from-bg via-bg/80 to-transparent" />
            
            <motion.div 
                className="flex whitespace-nowrap gap-24 md:gap-40 items-center"
                animate={{ x: [0, -2800] }} 
                transition={{ 
                    duration: 45, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
            >
                {[...BRANDS, ...BRANDS].map((brand, i) => (
                    <span 
                        key={i} 
                        className="text-secondary/20 font-text text-lg md:text-2xl uppercase tracking-[0.6em] hover:text-gold transition-all duration-700 cursor-default italic"
                    >
                        {brand}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
}