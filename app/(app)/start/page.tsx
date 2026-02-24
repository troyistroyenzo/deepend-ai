'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Play, Lock, Zap, RotateCcw } from 'lucide-react';
import { frameworks } from '@/lib/data/frameworks';
import { flashcards } from '@/lib/data/flashcards';
import { episodes } from '@/lib/data/episodes';
import { getAllProgress } from '@/lib/utils/storage';

const fwColors: Record<string, { text: string; bar: string; border: string; bg: string; gradient: string }> = {
  spirit:      { text: 'text-[#3B82F6]', bar: 'bg-[#3B82F6]', border: 'border-[#3B82F6]/30', bg: 'bg-[#3B82F6]/5', gradient: 'from-[#3B82F6] to-[#2563EB]' },
  trauma:      { text: 'text-[#F97316]', bar: 'bg-[#F97316]', border: 'border-[#F97316]/30', bg: 'bg-[#F97316]/5', gradient: 'from-[#F97316] to-[#EA580C]' },
  integration: { text: 'text-[#8B5CF6]', bar: 'bg-[#8B5CF6]', border: 'border-[#8B5CF6]/30', bg: 'bg-[#8B5CF6]/5', gradient: 'from-[#8B5CF6] to-[#7C3AED]' },
};

export default function Dashboard() {
  const [progress, setProgress] = useState<Record<string, string[]>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(getAllProgress());
    setMounted(true);
  }, []);

  const totalCards = flashcards.length;
  const totalCompleted = Object.values(progress).flat().length;
  const overallPct = totalCards > 0 ? Math.round((totalCompleted / totalCards) * 100) : 0;

  // Find the framework with most recent activity to suggest "continue"
  const continueFramework = frameworks.find((fw) => {
    const done = progress[fw.id] ?? [];
    const total = flashcards.filter((c) => c.frameworkId === fw.id).length;
    return done.length > 0 && done.length < total;
  }) ?? frameworks[0];

  const continueDone = progress[continueFramework.id]?.length ?? 0;
  const continueTotal = flashcards.filter((c) => c.frameworkId === continueFramework.id).length;
  const continuePct = continueTotal > 0 ? Math.round((continueDone / continueTotal) * 100) : 0;
  const continueColors = fwColors[continueFramework.color] ?? fwColors.spirit;

  return (
    <div className="py-12">

      {/* Header row */}
      <div className="flex items-end justify-between mb-10 border-b border-[#333333] pb-8">
        <div>
          <p className="text-xs font-mono tracking-[0.3em] text-white/20 uppercase mb-2">Dashboard</p>
          <h1 className="text-3xl sm:text-4xl font-mono font-bold">Learning Hub</h1>
        </div>
        {mounted && totalCompleted > 0 && (
          <div className="text-right">
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">Overall</p>
            <p className="text-3xl font-mono font-bold text-white">{overallPct}<span className="text-white/30 text-lg">%</span></p>
            <p className="text-xs font-mono text-white/30">{totalCompleted}/{totalCards} cards</p>
          </div>
        )}
      </div>

      {/* Continue + Stats row */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10">

        {/* Continue card — spans 2 cols */}
        <Link href={`/learn/flashcards/${continueFramework.id}`} className="sm:col-span-2">
          <div className={`relative rounded-xl border ${continueColors.border} ${continueColors.bg} p-6 hover:scale-[1.01] transition-all duration-200 overflow-hidden h-full`}>
            <div className="relative z-10">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/30 mb-3">
                {mounted && continueDone > 0 ? 'Continue where you left off' : 'Start here'}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{continueFramework.icon}</span>
                <div>
                  <h2 className={`font-mono font-bold text-xl ${continueColors.text}`}>{continueFramework.name}</h2>
                  <p className="text-white/40 font-sans text-sm">{continueFramework.description}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-mono text-white/30 mb-1.5">
                  <span>Progress</span>
                  <span>{mounted ? continueDone : 0}/{continueTotal} cards · {mounted ? continuePct : 0}%</span>
                </div>
                <div className="h-1 bg-[#333333] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${continueColors.gradient} transition-all duration-700`}
                    style={{ width: mounted ? `${continuePct}%` : '0%' }}
                  />
                </div>
              </div>

              <div className={`inline-flex items-center gap-2 text-sm font-mono ${continueColors.text}`}>
                {mounted && continueDone > 0 ? 'Continue' : 'Begin'} <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Background icon */}
            <div className="absolute right-4 bottom-2 text-8xl opacity-5 select-none pointer-events-none">
              {continueFramework.icon}
            </div>
          </div>
        </Link>

        {/* Stats column */}
        <div className="flex flex-col gap-4">
          <div className="card-binary flex-1 flex flex-col justify-between">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/30 mb-2">Episodes</p>
            <div>
              <p className="text-4xl font-mono font-bold text-white mb-1">{episodes.length}</p>
              <p className="text-xs font-mono text-white/30">Available to study</p>
            </div>
            <Link href="/episodes" className="mt-4 text-xs font-mono text-white/40 hover:text-white/70 uppercase tracking-wider transition-colors">
              Browse →
            </Link>
          </div>
          <div className="card-binary flex-1 flex flex-col justify-between">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/30 mb-2">Flashcards</p>
            <div>
              <p className="text-4xl font-mono font-bold text-white mb-1">{totalCards}</p>
              <p className="text-xs font-mono text-white/30">Across {frameworks.length} frameworks</p>
            </div>
            <Link href="/learn/flashcards" className="mt-4 text-xs font-mono text-white/40 hover:text-white/70 uppercase tracking-wider transition-colors">
              Study →
            </Link>
          </div>
        </div>
      </div>

      {/* All frameworks */}
      <div className="mb-10">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/20 mb-5">Frameworks</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {frameworks.map((fw) => {
            const done = mounted ? (progress[fw.id]?.length ?? 0) : 0;
            const total = flashcards.filter((c) => c.frameworkId === fw.id).length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            const c = fwColors[fw.color] ?? fwColors.spirit;

            return (
              <Link key={fw.id} href={`/learn/flashcards/${fw.id}`}>
                <div className="card-binary hover:scale-[1.01] transition-all duration-200 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{fw.icon}</span>
                    <span className={`text-xs font-mono ${c.text}`}>{pct}%</span>
                  </div>
                  <h3 className="font-mono font-bold text-sm uppercase tracking-wide mb-1">{fw.name}</h3>
                  <p className="text-xs text-white/40 font-sans mb-4 leading-relaxed line-clamp-2">{fw.description}</p>
                  <div className="h-0.5 bg-[#333333] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${c.bar} transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-mono text-white/20">{done}/{total} cards</span>
                    {done > 0 && done < total && (
                      <span className={`text-[10px] font-mono ${c.text} uppercase tracking-wide`}>In progress</span>
                    )}
                    {done === total && total > 0 && (
                      <span className="text-[10px] font-mono text-[#10B981] uppercase tracking-wide">Complete ✓</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Episodes */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/20">Episodes</p>
          <Link href="/episodes" className="text-xs font-mono text-white/30 hover:text-white/60 uppercase tracking-wider transition-colors">
            All episodes →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {episodes.map((ep, i) => (
            <Link key={ep.id} href={`/episodes/${ep.id}`}>
              <div className="card-binary group hover:scale-[1.01] transition-all duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Play className="w-3.5 h-3.5 text-[#3B82F6]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">EP {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="font-mono font-semibold text-sm leading-snug line-clamp-2 group-hover:text-[#3B82F6] transition-colors mb-2">
                      {ep.title}
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-white/20">
                      <span>{ep.duration}</span>
                      <span>·</span>
                      <span>{ep.concepts.length} concepts</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Coming soon row */}
      <div>
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/20 mb-5">Coming Soon</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="card-binary opacity-40 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#F97316]" />
              <div>
                <h3 className="font-mono font-bold text-sm">Topic Learning</h3>
                <p className="text-xs text-white/40 font-sans mt-0.5">Cross-episode concepts + diagnostic quizzes</p>
              </div>
            </div>
          </div>
          <div className="card-binary opacity-40 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#8B5CF6]" />
              <div>
                <h3 className="font-mono font-bold text-sm">AI Learning</h3>
                <p className="text-xs text-white/40 font-sans mt-0.5">Ask questions, get personalized protocols</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
