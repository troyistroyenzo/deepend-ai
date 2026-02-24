import EpisodeCard from '@/components/EpisodeCard';
import { episodes } from '@/lib/data/episodes';
import Link from 'next/link';

export default function EpisodesPage() {
  return (
    <div className="py-16">
      <div className="mb-12">
        <p className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-3">
          The Deep End Podcast
        </p>
        <h1 className="text-4xl sm:text-5xl font-mono font-bold mb-4">Episodes</h1>
        <p className="text-white/50 font-sans max-w-xl">
          Each episode is broken down into structured frameworks, key concepts,
          biblical references, and interactive flashcards.
        </p>
      </div>

      <div className="grid gap-4">
        {episodes.map((episode, i) => (
          <EpisodeCard key={episode.id} episode={episode} index={i} />
        ))}
      </div>

      <div className="mt-16 p-6 border border-[#333333] rounded-lg text-center">
        <p className="text-white/30 font-mono text-sm uppercase tracking-widest mb-2">
          More Episodes Coming
        </p>
        <p className="text-white/50 font-sans text-sm">
          Additional Deep End episodes are being processed and will be added as frameworks are extracted.
        </p>
      </div>
    </div>
  );
}
