import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(smoothX, [0, 1920], [-30, 30]);
  const moveY = useTransform(smoothY, [0, 1080], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center px-6"
    >
      <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <motion.div
        style={{ x: moveX, y: moveY }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gold/20 blur-[150px] rounded-full pointer-events-none"
      />

      <motion.div
        style={{ x: moveX, y: moveY }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-accent/15 blur-[180px] rounded-full pointer-events-none"
      />

      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-70 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="w-24 h-[1px] bg-gold mb-12"
        />

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-primary font-title text-7xl md:text-[14rem] italic leading-[0.8] drop-shadow-[0_25px_50px_rgba(0,0,0,1)] select-none tracking-tighter">
            Smell <span className="text-gold not-italic font-bold">Noir</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-4xl mt-12 space-y-6"
        >
          <p className="text-secondary font-text text-2xl md:text-5xl leading-tight tracking-tighter opacity-90">
            Onde o instinto encontra a <br /> sofisticação absoluta.
          </p>
          <p className="text-gold font-text text-xl md:text-3xl italic tracking-[0.4em] uppercase opacity-60">
            A assinatura da noite
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#products"
            className="group relative mt-20 inline-flex items-center justify-center px-20 py-8 bg-transparent border border-gold/20 overflow-hidden rounded-full transition-all duration-700 hover:border-gold"
          >
            <div className="absolute inset-0 bg-gold translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
            <span className="relative z-10 text-gold group-hover:text-bg font-text text-2xl font-bold tracking-[0.2em] transition-colors duration-700">
              EXPLORAR CATÁLOGO
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-3 z-20"
      >
        <div className="relative w-[1px] h-24 bg-gold/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

          <motion.div
            animate={{
              y: ["-100%", "400%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
