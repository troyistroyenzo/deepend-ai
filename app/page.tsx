import Link from 'next/link';
import { Brain, Lock, Zap, ArrowRight } from 'lucide-react';
import { frameworks } from '@/lib/data/frameworks';

export default function Home() {
  return (
    <div className="py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <div className="mb-4">
          <span className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase">
            Biblical Psychology Learning Platform
          </span>
        </div>
        <h1 className="text-6xl sm:text-8xl font-mono font-bold mb-6 gradient-title leading-none pb-2">
          DEEPEND AI
        </h1>
        <p className="text-lg sm:text-xl text-white/50 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          Transform The Deep End podcast into structured psychological frameworks
          with biblical foundations. Study flashcards, explore episode outlines,
          and integrate timeless truth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/episodes"
            className="inline-flex items-center gap-2 px-8 py-3 gradient-spirit rounded-lg font-mono font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Browse Episodes <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/learn/flashcards"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#333333] rounded-lg font-mono font-semibold text-white/70 hover:border-white/30 hover:text-white transition-all"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* Three Products */}
      <section className="mb-24">
        <h2 className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-8 text-center">
          Learning Modes
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/episodes">
            <div className="card-binary group cursor-pointer h-full">
              <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center mb-4 group-hover:bg-[#3B82F6]/30 transition-colors">
                <Brain className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <h3 className="text-lg font-mono font-bold mb-2 group-hover:text-[#3B82F6] transition-colors">
                Episode Learning
              </h3>
              <p className="text-sm text-white/50 font-sans leading-relaxed mb-4">
                Study frameworks through episode outlines and interactive 3D flashcards.
              </p>
              <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider">
                Active →
              </span>
            </div>
          </Link>

          <div className="card-binary opacity-40 cursor-not-allowed">
            <div className="w-10 h-10 rounded-lg bg-[#F97316]/20 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-[#F97316]" />
            </div>
            <h3 className="text-lg font-mono font-bold mb-2">Topic Learning</h3>
            <p className="text-sm text-white/50 font-sans leading-relaxed mb-4">
              Learn by concept across multiple episodes with diagnostic quizzes.
            </p>
            <span className="text-xs font-mono text-white/30 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>

          <div className="card-binary opacity-40 cursor-not-allowed">
            <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <h3 className="text-lg font-mono font-bold mb-2">AI Learning</h3>
            <p className="text-sm text-white/50 font-sans leading-relaxed mb-4">
              Ask questions, get personalized protocols, explore with AI trained on all content.
            </p>
            <span className="text-xs font-mono text-white/30 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* Frameworks Preview */}
      <section>
        <h2 className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-8 text-center">
          Core Frameworks
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {frameworks.map((fw) => {
            const colorMap: Record<string, string> = {
              spirit: 'text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/20',
              trauma: 'text-[#F97316] bg-[#F97316]/10 border-[#F97316]/20',
              integration: 'text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/20',
            };
            const style = colorMap[fw.color] ?? colorMap.spirit;

            return (
              <div key={fw.id} className={`rounded-lg border p-5 ${style}`}>
                <div className="text-2xl mb-3">{fw.icon}</div>
                <h3 className="font-mono font-bold text-sm uppercase tracking-wide mb-2">
                  {fw.name}
                </h3>
                <p className="text-xs opacity-70 font-sans leading-relaxed">
                  {fw.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
