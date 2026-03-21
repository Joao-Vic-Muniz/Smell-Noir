import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 flex items-center justify-between px-12 
            ${isScrolled ? 'bg-bg/80 backdrop-blur-md border-b border-accent/20' : 'bg-transparent'}`}>

            <div className="flex-1 flex justify-start">
                <h2 className="font-title text-primary text-3xl cursor-pointer hover:text-gold transition-all duration-300 italic">
                    Smell Noir
                </h2>
            </div>

            <div className="hidden md:flex flex-row items-center gap-12">
    {[
        { name: "Início", href: "#home" },
        { name: "Popular", href: "#popular" },
        { name: "Sobre nós", href: "#about" },
        { name: "Contato", href: "#contact" }
    ].map((link) => (
        <a 
            key={link.name}
            href={link.href} 
            className="group relative font-text text-secondary text-2xl hover:text-primary transition-all duration-300 pb-1"
        >
            {link.name}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></span>
        </a>
    ))}
</div>

            <div className="flex-1 flex justify-end">
                <button className="font-text text-gold border border-gold/40 px-8 py-2.5 rounded-full text-2xl  hover:bg-gold hover:text-bg transition-all duration-500 font- cursor-pointer">
                    Loja
                </button>
            </div>

        </nav>
    )
}