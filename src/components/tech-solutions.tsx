"use client";

import { motion } from "framer-motion";
import { Check, Cpu, Globe, Smartphone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Image from "next/image";

export function TechSolutions() {
    const { language } = useLanguage();
    const t = translations[language].tech_solutions;

    const icons = [Cpu, Globe, Smartphone];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/tech_background_abstract_1764114968569.png"
                    alt="Tech Background"
                    fill
                    className="object-cover opacity-20"
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.cards.map((card, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group flex flex-col backdrop-blur-sm"
                            >
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-gray-400">
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                                <p className="text-gray-400 mb-8 flex-grow">{card.desc}</p>

                                <ul className="space-y-3 mb-8">
                                    {card.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-300 text-sm">
                                            <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/584124755165?text=${encodeURIComponent(`Hola Creapp, estoy interesado en una solución de ${card.title}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 rounded-xl font-bold border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-primary group-hover:text-primary group-hover:hover:bg-primary group-hover:hover:text-white"
                                >
                                    {t.cta}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
