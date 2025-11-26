"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage } = useLanguage();
    const t = translations[language].nav;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - Text Only for V1 */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-primary group-hover:to-purple-400 transition-all duration-300">
                            Creapp
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#servicios" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                            {t.services}
                        </Link>
                        {/* Portfolio Hidden for V1 */}
                        {/* <Link href="#portafolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                            {t.portfolio}
                        </Link> */}
                        <Link href="#planes" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                            {t.plans}
                        </Link>
                        <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                            {t.contact}
                        </Link>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">{language}</span>
                        </button>

                        <a
                            href="https://wa.me/584124755165?text=Hola%20Creapp,%20quiero%20cotizar%20un%20proyecto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-full text-white font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                        >
                            {t.quote}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">{language}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
                            <Link href="#servicios" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2 block">
                                {t.services}
                            </Link>
                            {/* <Link href="#portafolio" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2 block">
                                {t.portfolio}
                            </Link> */}
                            <Link href="#planes" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2 block">
                                {t.plans}
                            </Link>
                            <Link href="#contacto" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2 block">
                                {t.contact}
                            </Link>
                            <a
                                href="https://wa.me/584124755165?text=Hola%20Creapp,%20quiero%20cotizar%20un%20proyecto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white text-black rounded-xl font-bold mt-4 block text-center"
                            >
                                {t.quote}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
