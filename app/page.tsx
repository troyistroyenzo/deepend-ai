'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const ASCII_ART = `
██████╗ ███████╗███████╗██████╗ ███████╗███╗   ██╗██████╗
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝████╗  ██║██╔══██╗
██║  ██║█████╗  █████╗  ██████╔╝█████╗  ██╔██╗ ██║██║  ██║
██║  ██║██╔══╝  ██╔══╝  ██╔═══╝ ██╔══╝  ██║╚██╗██║██║  ██║
██████╔╝███████╗███████╗██║     ███████╗██║ ╚████║██████╔╝
╚═════╝ ╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═══╝╚═════╝`.trim();

const ASCII_SMALL = `
 ___  ____ ____ ___  ____ _  _ ___
 |  \\ |___ |___ |__] |___ |\\ | |  \\
 |__/ |___ |___ |    |___ | \\| |__/`.trim();

const CHARS = '░▒▓█▀▄╗╔╚╝║═╬╣╠╩╦01';

function scramble(text: string): string {
  return text
    .split('')
    .map((ch) => {
      if (ch === ' ' || ch === '\n') return ch;
      return Math.random() > 0.4 ? ch : CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join('');
}

export default function LandingPage() {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'scramble' | 'reveal' | 'done'>('scramble');
  const [opacity, setOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const targetArt = isMobile ? ASCII_SMALL : ASCII_ART;

  useEffect(() => {
    setOpacity(1);

    // Scramble phase
    let frame = 0;
    const totalFrames = 20;
    const interval = setInterval(() => {
      frame++;
      if (frame <= totalFrames) {
        // Gradually reveal real characters
        const progress = frame / totalFrames;
        const mixed = targetArt
          .split('')
          .map((ch, i) => {
            if (ch === ' ' || ch === '\n') return ch;
            return Math.random() < progress
              ? ch
              : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
        setDisplayText(mixed);
        if (frame === totalFrames) {
          setPhase('reveal');
        }
      } else {
        setDisplayText(targetArt);
        setPhase('done');
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [targetArt]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#3B82F6]/30">
      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-10" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
      }} />

      {/* Subtle grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />

      {/* Main content */}
      <div
        className="relative z-20 flex flex-col items-center justify-center px-4 transition-opacity duration-1000"
        style={{ opacity }}
      >
        {/* ASCII Art */}
        <pre
          className="font-mono text-white text-[0.45rem] sm:text-[0.55rem] md:text-xs lg:text-sm leading-none tracking-tight mb-12 text-center select-none"
          style={{
            textShadow: phase === 'done'
              ? '0 0 20px rgba(59,130,246,0.3), 0 0 40px rgba(59,130,246,0.1)'
              : '0 0 10px rgba(59,130,246,0.15)',
            transition: 'text-shadow 0.5s ease',
          }}
        >
          {displayText || targetArt}
        </pre>

        {/* Tagline */}
        <div className="text-center mb-12">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-white/20 uppercase mb-4">
            Biblical Psychology Learning Platform
          </p>
          <p className="font-sans text-sm sm:text-base text-white/40 max-w-md mx-auto leading-relaxed">
            Structured frameworks from The Deep End podcast.
            <br className="hidden sm:block" />
            {' '}Flashcards. Episode outlines. Biblical integration.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/start"
          className="group relative font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-white/60 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30 px-8 py-3 rounded"
        >
          <span className="relative z-10">Enter</span>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded transition-all duration-300" />
        </Link>

        {/* Bottom hint */}
        <p className="mt-16 font-mono text-[9px] tracking-[0.3em] text-white/10 uppercase">
          Flesh OS ↔ Spirit OS — Two systems. One choice.
        </p>
      </div>

      {/* Corner markers */}
      <div className="fixed top-4 left-4 font-mono text-[9px] text-white/10 tracking-widest z-20">
        DEEPEND.AI
      </div>
      <div className="fixed top-4 right-4 font-mono text-[9px] text-white/10 tracking-widest z-20">
        V1.0
      </div>
      <div className="fixed bottom-4 left-4 font-mono text-[9px] text-white/10 tracking-widest z-20">
        ROM 8:6
      </div>
      <div className="fixed bottom-4 right-4 font-mono text-[9px] text-white/10 tracking-widest z-20">
        2025
      </div>
    </div>
  );
}
