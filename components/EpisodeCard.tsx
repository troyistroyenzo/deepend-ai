import Link from 'next/link';
import { PlayCircle, BookOpen, Clock } from 'lucide-react';
import { Episode } from '@/lib/types';

interface EpisodeCardProps {
  episode: Episode;
  index?: number;
}

export default function EpisodeCard({ episode, index = 0 }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.id}`}>
      <div className="card-binary group hover:scale-[1.01] transition-all duration-200 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/30 transition-colors">
            <PlayCircle className="w-6 h-6 text-[#3B82F6]" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                EP {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="font-mono font-bold text-base sm:text-lg mb-2 leading-snug line-clamp-2 group-hover:text-[#3B82F6] transition-colors">
              {episode.title}
            </h3>
            <p className="text-sm text-white/50 mb-4 line-clamp-2 font-sans">
              {episode.description}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-white/30">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {episode.duration}
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                {episode.concepts.length} concepts
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
