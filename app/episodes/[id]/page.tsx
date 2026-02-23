import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, BookOpen } from 'lucide-react';
import { episodes } from '@/lib/data/episodes';
import { frameworks } from '@/lib/data/frameworks';
import { concepts } from '@/lib/data/concepts';
import { biblicalRefs } from '@/lib/data/biblical';
import BiblicalReference from '@/components/BiblicalReference';
import OutlineSection from '@/components/OutlineSection';

interface PageProps {
  params: Promise<{ id: string }>;
}

const frameworkColorMap: Record<string, string> = {
  spirit: 'border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[#3B82F6]',
  trauma: 'border-[#F97316]/30 bg-[#F97316]/5 text-[#F97316]',
  integration: 'border-[#8B5CF6]/30 bg-[#8B5CF6]/5 text-[#8B5CF6]',
};

export default async function EpisodeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const episode = episodes.find((e) => e.id === id);

  if (!episode) notFound();

  const episodeFrameworks = frameworks.filter((f) => episode.frameworks.includes(f.id));
  const episodeConcepts = concepts.filter((c) => episode.concepts.includes(c.id));

  const allConceptRefIds = episodeConcepts.flatMap((c) => c.biblicalRefs);
  const uniqueRefIds = [...new Set(allConceptRefIds)];
  const episodeBibleRefs = biblicalRefs.filter((r) => uniqueRefIds.includes(r.id));

  const primaryFramework = episodeFrameworks[0];

  return (
    <div className="py-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/episodes" className="text-xs font-mono text-white/30 hover:text-white/60 uppercase tracking-widest transition-colors">
          ← Episodes
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-3">
          {episode.publishedDate}
        </p>
        <h1 className="text-3xl sm:text-4xl font-mono font-bold mb-4 leading-tight">
          {episode.title}
        </h1>
        <p className="text-white/60 font-sans text-lg leading-relaxed mb-8 max-w-2xl">
          {episode.description}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={episode.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EF4444] hover:bg-[#DC2626] rounded-lg font-mono text-sm font-semibold text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Watch on YouTube
          </a>
          {primaryFramework && (
            <Link
              href={`/learn/flashcards/${primaryFramework.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg font-mono text-sm font-semibold text-white transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Study Flashcards
            </Link>
          )}
        </div>
      </div>

      {/* Frameworks Covered */}
      {episodeFrameworks.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-6">
            Frameworks Covered
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {episodeFrameworks.map((fw) => {
              const style = frameworkColorMap[fw.color] ?? frameworkColorMap.spirit;
              return (
                <div key={fw.id} className={`rounded-lg border p-5 ${style}`}>
                  <div className="text-2xl mb-2">{fw.icon}</div>
                  <h3 className="font-mono font-bold uppercase tracking-wide mb-1">{fw.name}</h3>
                  <p className="text-sm opacity-70 font-sans">{fw.description}</p>
                  <Link
                    href={`/learn/flashcards/${fw.id}`}
                    className="inline-block mt-3 text-xs font-mono underline opacity-70 hover:opacity-100"
                  >
                    Study flashcards →
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Key Concepts / Outline */}
      <section className="mb-12">
        <h2 className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-6">
          Key Concepts
        </h2>
        <div className="space-y-2">
          {episodeConcepts.map((concept, i) => (
            <OutlineSection
              key={concept.id}
              name={concept.name}
              description={concept.description}
              timestamp={concept.timestamps[0]?.time}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Biblical Foundation */}
      {episodeBibleRefs.length > 0 && (
        <section>
          <h2 className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase mb-6">
            Biblical Foundation
          </h2>
          <div className="space-y-2">
            {episodeBibleRefs.map((ref) => (
              <BiblicalReference
                key={ref.id}
                reference={ref.reference}
                text={ref.text}
                application={ref.application}
                isPrimary={ref.isPrimary}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
