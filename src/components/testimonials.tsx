"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Testimonials() {
    const { language } = useLanguage();
    const t = translations[language].testimonials;

    return (
        <section className="py-24 bg-background relative overflow-hidden">
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
                    {t.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:bg-white/10 transition-colors"
                        >
                            <Quote className="w-10 h-10 text-primary/50 mb-6" />
                            <p className="text-gray-300 mb-6 italic">"{item.comment}"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                    {item.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-gray-500 text-xs">{item.role}</p>
                                </div>
                            </div>
                            <div className="absolute top-8 right-8 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {item.service}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
