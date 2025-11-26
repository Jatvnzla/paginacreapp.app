"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";

export function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! 👋 Soy el asistente virtual de Creapp. ¿En qué puedo ayudarte hoy?", sender: "bot" },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isLoading]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessageText = inputValue.trim();
        const userMessage = { id: Date.now(), text: userMessageText, sender: "user" };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            // Connect to n8n webhook
            const response = await fetch("https://clickgo-n8n.1xrk3z.easypanel.host/webhook/e0c84270-118b-4222-ad23-210e02f610c7/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chatInput: userMessageText,
                    sessionId: "session-" + Math.random().toString(36).substr(2, 9) // Simple session ID
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            // Assuming the n8n webhook returns a JSON with an 'output' or 'text' field
            // Adjust this based on the actual response structure from n8n
            const botText = data.output || data.text || data.message || "Lo siento, no pude procesar tu respuesta.";

            const botResponse = {
                id: Date.now() + 1,
                text: botText,
                sender: "bot"
            };
            setMessages((prev) => [...prev, botResponse]);

        } catch (error) {
            console.error("Error sending message to n8n:", error);
            const errorResponse = {
                id: Date.now() + 1,
                text: "Lo siento, hubo un error al conectar con el servidor. Por favor intenta de nuevo más tarde.",
                sender: "bot"
            };
            setMessages((prev) => [...prev, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-colors ${isOpen ? "hidden" : "bg-chat-accent text-white flex items-center justify-center"
                    }`}
            >
                <MessageCircle className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary/20 p-4 flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Creapp Bot</h3>
                                    <p className="text-xs text-green-400 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        En línea
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                            ? "bg-primary text-white rounded-tr-none"
                                            : "bg-white/10 text-gray-200 rounded-tl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                                        <span className="text-xs text-gray-400">Escribiendo...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-white/5">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Escribe un mensaje..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    className="p-2 bg-primary hover:bg-primary/90 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!inputValue.trim() || isLoading}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-center text-[10px] text-gray-500 mt-2">
                                Powered by n8n & Creapp AI
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
