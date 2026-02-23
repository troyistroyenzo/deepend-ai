import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepend AI - Biblical Psychology Learning Platform",
  description:
    "Learn biblical psychology frameworks from The Deep End podcast through structured learning, flashcards, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <nav className="border-b border-[#333333] bg-[#0A0A0A]/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a
                href="/"
                className="font-mono font-bold text-xl text-white tracking-widest uppercase"
              >
                DEEPEND<span className="text-[#3B82F6]">.</span>AI
              </a>
              <div className="flex items-center gap-6">
                <a
                  href="/episodes"
                  className="text-sm font-mono text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                >
                  Episodes
                </a>
                <a
                  href="/learn/flashcards"
                  className="text-sm font-mono text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                >
                  Learn
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          {children}
        </main>
        <footer className="border-t border-[#333333] mt-20 py-8 text-center text-sm font-mono text-white/30">
          DEEPEND.AI — Biblical Psychology Learning Platform
        </footer>
      </body>
    </html>
  );
}
