'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlashcardProps {
  front: string;
  back: string;
  frameworkColor?: string;
  onFlip?: () => void;
}

const colorMap: Record<string, string> = {
  spirit: 'from-[#3B82F6] to-[#2563EB]',
  flesh: 'from-[#EF4444] to-[#DC2626]',
  trauma: 'from-[#F97316] to-[#EA580C]',
  healing: 'from-[#10B981] to-[#059669]',
  integration: 'from-[#8B5CF6] to-[#7C3AED]',
};

export default function Flashcard({ front, back, frameworkColor = 'spirit', onFlip }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    const newFlipped = !isFlipped;
    setIsFlipped(newFlipped);
    if (newFlipped && onFlip) onFlip();
  };

  const gradient = colorMap[frameworkColor] ?? colorMap.spirit;

  return (
    <div
      className="relative h-80 sm:h-96 cursor-pointer perspective-1000 select-none"
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 flex flex-col items-center justify-center shadow-2xl`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <p className="text-white text-xl sm:text-2xl font-bold text-center leading-snug font-mono">
            {front}
          </p>
          <p className="text-white/60 text-xs mt-6 font-mono uppercase tracking-widest">
            Tap to reveal
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl bg-[#1A1A1A] border border-[#333333] p-6 sm:p-8 flex flex-col justify-center shadow-2xl overflow-y-auto"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <pre className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {back}
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
