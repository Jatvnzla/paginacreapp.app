"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Star, Crown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Pricing() {
    const [activeTab, setActiveTab] = useState("social");
    const { language } = useLanguage();
    const t = translations[language].pricing;

    // Map the translation data to the structure needed for rendering
    // We use the keys 'social', 'video', 'design' to match the tabs
    const categories = [
        { id: "social", label: t.tabs.social, icon: Star, plans: t.plans.social },
        { id: "video", label: t.tabs.video, icon: Zap, plans: t.plans.video },
        { id: "design", label: t.tabs.design, icon: Crown, plans: t.plans.design }
    ];

    const activeCategory = categories.find(c => c.id === activeTab) || categories[0];

    return (
        <section id="planes" className="py-24 bg-background relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

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

                {/* Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === category.id ? "text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {activeTab === category.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{category.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
                >
                    <AnimatePresence mode="wait">
                        {activeCategory.plans.map((plan, index) => (
                            <motion.div
                                key={plan.name + activeTab}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`relative p-8 rounded-3xl border transition-all duration-300 group ${index === 1 // Highlight the middle plan usually
                                        ? "bg-white/10 border-primary/50 shadow-2xl shadow-primary/10"
                                        : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                    }`}
                            >
                                {index === 1 && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-purple-500 rounded-full text-xs font-bold text-white shadow-lg">
                                        {t.popular}
                                    </div>
                                )}

                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${index === 1 ? "bg-primary text-white" : "bg-white/10 text-gray-400 group-hover:text-white"
                                    }`}>
                                    {/* Using generic icons based on index for now */}
                                    {index === 0 ? <Star className="w-6 h-6" /> : index === 1 ? <Zap className="w-6 h-6" /> : <Crown className="w-6 h-6" />}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.desc}</p>

                                {/* Price Hidden for V1 */}
                                {/* <div className="mb-6">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-400 ml-2">/mes</span>
                                </div> */}

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-gray-300 text-sm">
                                            <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${index === 1 ? "text-primary" : "text-gray-500"
                                                }`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/584124755165?text=${encodeURIComponent(`Hola Creapp, estoy interesado en el plan ${plan.name}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 block text-center ${index === 1
                                            ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
                                            : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                                        }`}
                                >
                                    {t.cta}
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
