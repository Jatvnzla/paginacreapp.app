"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const projects = [
    {
        id: 1,
        title: "Fashion Brand Growth",
        category: "social",
        image: "bg-gradient-to-br from-pink-500 to-rose-500",
        description: "Estrategia de crecimiento orgánico que logró +10k seguidores en 3 meses.",
        link: "#"
    },
    {
        id: 2,
        title: "Tech Startup Automation",
        category: "apps",
        image: "bg-gradient-to-br from-blue-500 to-cyan-500",
        description: "Sistema de automatización de leads con n8n y CRM personalizado.",
        link: "#"
    },
    {
        id: 3,
        title: "Real Estate Reels",
        category: "video",
        image: "bg-gradient-to-br from-emerald-500 to-teal-500",
        description: "Edición dinámica para inmobiliaria. Aumento del 200% en engagement.",
        link: "#"
    },
    {
        id: 4,
        title: "E-commerce Redesign",
        category: "design",
        image: "bg-gradient-to-br from-purple-500 to-indigo-500",
        description: "Rediseño completo de identidad visual y tienda online.",
        link: "#"
    },
    {
        id: 5,
        title: "Viral Content Pack",
        category: "video",
        image: "bg-gradient-to-br from-orange-500 to-red-500",
        description: "Pack de 10 videos cortos optimizados para TikTok y Reels.",
        link: "#"
    },
    {
        id: 6,
        title: "Corporate App",
        category: "apps",
        image: "bg-gradient-to-br from-slate-700 to-slate-900",
        description: "Aplicación de gestión interna para empresa de logística.",
        link: "#"
    }
];

export function Portfolio() {
    const [filter, setFilter] = useState("all");
    const { language } = useLanguage();
    const t = translations[language].portfolio;

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = [
        { id: "all", label: t.filters.all },
        { id: "social", label: t.filters.social },
        { id: "video", label: t.filters.video },
        { id: "apps", label: t.filters.web },
    ];

    return (
        <section id="portafolio" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
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

                {/* Filters */}
                <div className="flex justify-center mb-12 flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat.id
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                            >
                                {/* Background Image Placeholder */}
                                <div className={`absolute inset-0 ${project.image} transition-transform duration-500 group-hover:scale-110`} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        <button className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
