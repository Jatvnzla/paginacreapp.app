"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Footer() {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Creapp
                    </span>
                </div>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Creapp. {t.rights}
                </p>

                <div className="flex gap-6">
                    <a
                        href="https://www.instagram.com/creapp_ve/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.tiktok.com/@creapp_v"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        TikTok
                    </a>
                </div>
            </div>
        </footer>
    );
}
