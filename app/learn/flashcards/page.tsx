import Link from 'next/link';
import { frameworks } from '@/lib/data/frameworks';
import { flashcards } from '@/lib/data/flashcards';

const colorMap: Record<string, { border: string; bg: string; text: string; bar: string }> = {
  spirit:      { border: 'border-[#3B82F6]/30', bg: 'bg-[#3B82F6]/5',  text: 'text-[#3B82F6]', bar: 'bg-[#3B82F6]' },
  trauma:      { border: 'border-[#F97316]/30', bg: 'bg-[#F97316]/5',  text: 'text-[#F97316]', bar: 'bg-[#F97316]' },
  integration: { border: 'border-[#8B5CF6]/30', bg: 'bg-[#8B5CF6]/5',  text: 'text-[#8B5CF6]', bar: 'bg-[#8B5CF6]' },
};

export default function FlashcardsOverviewPage() {
  return (
    <div className="py-16">
      <div className="mb-12">
        <p className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-3">
          Interactive Learning
        </p>
        <h1 className="text-4xl sm:text-5xl font-mono font-bold mb-4">Flashcards</h1>
        <p className="text-white/50 font-sans max-w-xl">
          Study all three frameworks through interactive 3D flashcards. Your progress is saved automatically.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {frameworks.map((fw) => {
          const cardCount = flashcards.filter((c) => c.frameworkId === fw.id).length;
          const style = colorMap[fw.color] ?? colorMap.spirit;

          return (
            <Link key={fw.id} href={`/learn/flashcards/${fw.id}`}>
              <div className={`rounded-xl border ${style.border} ${style.bg} p-6 hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full`}>
                <div className="text-3xl mb-4">{fw.icon}</div>
                <h3 className={`font-mono font-bold uppercase tracking-wide mb-2 ${style.text}`}>
                  {fw.name}
                </h3>
                <p className="text-sm text-white/50 font-sans leading-relaxed mb-6">
                  {fw.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white/30">
                    {cardCount} cards
                  </span>
                  <span className={`text-xs font-mono ${style.text}`}>
                    Study →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
