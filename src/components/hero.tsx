"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Hero() {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section className="relative w-full min-h-screen md:min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center overflow-hidden bg-background py-12 md:py-0">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-chat-accent/10 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-0">
                {/* Text Side */}
                <div className="w-full md:w-1/2 text-center md:text-left pt-8 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                            {t.subtitle}
                        </h2>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{t.titleHighlight}</span> {t.titleEnd}
                        </h1>
                        <p className="text-base text-gray-300 mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            {t.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold text-base transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
                                {t.ctaPrimary}
                            </button>
                            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold text-base transition-all backdrop-blur-sm">
                                {t.ctaSecondary}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* 3D Side */}
                <div className="w-full md:w-1/2 h-[480px] md:h-[600px] relative flex items-center justify-center mt-8 md:mt-0">
                    {/* Visual Placeholder: Smartphone & Icons (Option 3) */}
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Background Glow */}
                        <div className="absolute w-[350px] h-[350px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />

                        {/* Floating Icons Orbiting */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[20%] right-[10%] md:right-[20%] z-20 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
                        >
                            <span className="text-2xl">⚡</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[25%] left-[5%] md:left-[15%] z-20 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-[30%] left-[0%] md:left-[10%] z-20 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
                        >
                            <span className="text-2xl">📱</span>
                        </motion.div>

                        {/* Smartphone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-[220px] h-[440px] md:w-[260px] md:h-[520px] bg-black rounded-[40px] border-[8px] border-gray-800 shadow-2xl overflow-hidden"
                        >
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />

                            {/* Screen Content */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex flex-col">
                                {/* Header */}
                                <div className="h-16 w-full bg-white/5 border-b border-white/5 flex items-end pb-2 px-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500" />
                                </div>

                                {/* Chat/Feed Area */}
                                <div className="flex-1 p-4 space-y-4">
                                    {/* Message 1 */}
                                    <div className="flex items-start gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0" />
                                        <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                                            <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                                            <div className="h-2 w-32 bg-white/10 rounded" />
                                        </div>
                                    </div>

                                    {/* Message 2 (Right) */}
                                    <div className="flex items-start gap-2 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
                                        <div className="bg-primary/20 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                                            <div className="h-2 w-20 bg-white/30 rounded mb-2" />
                                            <div className="h-20 w-32 bg-white/10 rounded-lg" /> {/* Image placeholder */}
                                        </div>
                                    </div>

                                    {/* Floating Stats Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-8 mx-2 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="h-2 w-16 bg-white/30 rounded" />
                                            <div className="h-4 w-4 bg-green-500 rounded-full" />
                                        </div>
                                        <div className="h-8 w-24 bg-white/10 rounded mb-2" />
                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[70%] bg-primary" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="h-16 w-full bg-white/5 border-t border-white/5 flex justify-around items-center px-4">
                                    <div className="w-6 h-6 rounded bg-white/20" />
                                    <div className="w-6 h-6 rounded bg-white/10" />
                                    <div className="w-6 h-6 rounded bg-white/10" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
