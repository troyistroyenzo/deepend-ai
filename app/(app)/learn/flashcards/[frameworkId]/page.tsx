'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen } from 'lucide-react';
import Flashcard from '@/components/Flashcard';
import ProgressTracker from '@/components/ProgressTracker';
import BiblicalReference from '@/components/BiblicalReference';
import { flashcards } from '@/lib/data/flashcards';
import { frameworks } from '@/lib/data/frameworks';
import { biblicalRefs } from '@/lib/data/biblical';
import { getProgress, saveProgress, resetProgress } from '@/lib/utils/storage';

interface PageProps {
  params: Promise<{ frameworkId: string }>;
}

const colorMap: Record<string, string> = {
  spirit:      'text-[#3B82F6]',
  trauma:      'text-[#F97316]',
  integration: 'text-[#8B5CF6]',
};

const tabColorMap: Record<string, string> = {
  spirit:      'border-[#3B82F6] text-[#3B82F6]',
  trauma:      'border-[#F97316] text-[#F97316]',
  integration: 'border-[#8B5CF6] text-[#8B5CF6]',
};

export default function FlashcardsPage({ params }: PageProps) {
  const { frameworkId } = React.use(params);

  const framework = frameworks.find((f) => f.id === frameworkId);
  const frameworkCards = flashcards.filter((c) => c.frameworkId === frameworkId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    setCompleted(getProgress(frameworkId));
    setCurrentIndex(0);
  }, [frameworkId]);

  if (!framework || frameworkCards.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-mono text-white/50">Framework not found.</p>
        <Link href="/learn/flashcards" className="text-[#3B82F6] font-mono text-sm mt-4 inline-block">
          ← Back to flashcards
        </Link>
      </div>
    );
  }

  const currentCard = frameworkCards[currentIndex];

  const currentBibleRef = currentCard?.biblicalRef
    ? biblicalRefs.find((r) => r.id === currentCard.biblicalRef)
    : undefined;

  const handleFlip = () => {
    if (!completed.includes(currentCard.id)) {
      const updated = [...completed, currentCard.id];
      setCompleted(updated);
      saveProgress(frameworkId, updated);
    }
  };

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(frameworkCards.length - 1, i + 1));

  const handleReset = () => {
    setIsResetting(true);
    setTimeout(() => {
      resetProgress(frameworkId);
      setCompleted([]);
      setCurrentIndex(0);
      setIsResetting(false);
    }, 150);
  };

  const accentColor = colorMap[framework.color] ?? colorMap.spirit;
  const tabColor = tabColorMap[framework.color] ?? tabColorMap.spirit;

  return (
    <div className="py-12">
      {/* Back link */}
      <div className="mb-8">
        <Link href="/learn/flashcards" className="text-xs font-mono text-white/30 hover:text-white/60 uppercase tracking-widest transition-colors">
          ← All Frameworks
        </Link>
      </div>

      {/* Framework Header */}
      <div className="text-center mb-8">
        <div className="text-4xl mb-3">{framework.icon}</div>
        <h1 className={`text-2xl sm:text-3xl font-mono font-bold mb-2 ${accentColor}`}>
          {framework.name}
        </h1>
        <p className="text-white/50 font-sans text-sm max-w-md mx-auto">
          {framework.description}
        </p>
      </div>

      {/* Framework Tabs */}
      <div className="flex overflow-x-auto gap-1 mb-8 border-b border-[#333333] pb-0">
        {frameworks.map((fw) => {
          const isActive = fw.id === frameworkId;
          const tc = tabColorMap[fw.color] ?? tabColorMap.spirit;
          return (
            <Link
              key={fw.id}
              href={`/learn/flashcards/${fw.id}`}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap border-b-2 transition-all ${
                isActive
                  ? `${tc} -mb-px`
                  : 'border-transparent text-white/30 hover:text-white/60'
              }`}
            >
              {fw.icon} {fw.name}
            </Link>
          );
        })}
      </div>

      {/* Progress */}
      <div className="mb-8">
        <ProgressTracker
          completed={completed.length}
          total={frameworkCards.length}
          color={framework.color}
          label="Progress"
        />
      </div>

      {/* Card counter */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
          Card {currentIndex + 1} of {frameworkCards.length}
        </span>
        <span className={`text-xs font-mono uppercase tracking-widest ${
          currentCard.difficulty === 'easy' ? 'text-[#10B981]' :
          currentCard.difficulty === 'medium' ? 'text-[#F97316]' :
          'text-[#EF4444]'
        }`}>
          {currentCard.difficulty}
        </span>
      </div>

      {/* Flashcard */}
      <div className={`mb-8 transition-opacity duration-150 ${isResetting ? 'opacity-0' : 'opacity-100'}`}>
        <Flashcard
          key={`${frameworkId}-${currentIndex}`}
          front={currentCard.front}
          back={currentCard.back}
          frameworkColor={framework.color}
          onFlip={handleFlip}
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 border border-[#333333] rounded-lg font-mono text-sm text-white/70 hover:border-white/30 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>

        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2.5 border border-[#333333] rounded-lg font-mono text-xs text-white/40 hover:border-white/20 hover:text-white/60 transition-all"
          title="Reset progress"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === frameworkCards.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 border border-[#333333] rounded-lg font-mono text-sm text-white/70 hover:border-white/30 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Biblical Reference for current card */}
      {currentBibleRef && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-white/30" />
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
              Biblical Reference
            </span>
          </div>
          <BiblicalReference
            reference={currentBibleRef.reference}
            text={currentBibleRef.text}
            application={currentBibleRef.application}
            isPrimary={currentBibleRef.isPrimary}
          />
        </div>
      )}
    </div>
  );
}
