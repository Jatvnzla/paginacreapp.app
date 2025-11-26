"use client";

import { motion } from "framer-motion";
import { Video, Share2, Code, Cpu, Globe, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Services() {
    const { language } = useLanguage();
    const t = translations[language].services;

    const services = [
        {
            title: t.socialTitle,
            description: t.socialDesc,
            items: [
                { icon: Video, title: t.items.content.title, desc: t.items.content.desc },
                { icon: Share2, title: t.items.management.title, desc: t.items.management.desc },
                { icon: Zap, title: t.items.ads.title, desc: t.items.ads.desc },
            ]
        },
        {
            title: t.techTitle,
            description: t.techDesc,
            items: [
                { icon: Cpu, title: t.items.automation.title, desc: t.items.automation.desc },
                { icon: Globe, title: t.items.web.title, desc: t.items.web.desc },
                { icon: Code, title: t.items.ai.title, desc: t.items.ai.desc },
            ]
        }
    ];

    return (
        <section id="servicios" className="py-24 bg-background relative overflow-hidden">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                            <p className="text-gray-400 mb-8">{category.description}</p>

                            <div className="space-y-6">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
