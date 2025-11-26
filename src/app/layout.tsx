import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot-widget";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://creapp.app'), // Replace with actual domain if different
  title: "Creapp - Tu visión, nuestra creación",
  description: "Agencia de gestión de redes sociales, automatización y desarrollo de apps.",
  openGraph: {
    title: "Creapp - Tu visión, nuestra creación",
    description: "Agencia de gestión de redes sociales, automatización y desarrollo de apps.",
    url: 'https://creapp.app',
    siteName: 'Creapp',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Creapp Preview',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <ChatbotWidget />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
