'use client';

import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface BiblicalReferenceProps {
  reference: string;
  text?: string;
  application?: string;
  isPrimary?: boolean;
}

export default function BiblicalReference({
  reference,
  text,
  application,
  isPrimary = false,
}: BiblicalReferenceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`rounded-lg border transition-all duration-200 ${isPrimary ? 'border-[#3B82F6]/40 bg-[#3B82F6]/5' : 'border-[#333333] bg-[#1A1A1A]'}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full p-4 text-left"
      >
        <div className="flex items-center gap-2">
          <BookOpen className={`w-4 h-4 flex-shrink-0 ${isPrimary ? 'text-[#3B82F6]' : 'text-white/40'}`} />
          <span className={`font-mono text-sm font-semibold ${isPrimary ? 'text-[#3B82F6]' : 'text-white/70'}`}>
            {reference}
          </span>
          {isPrimary && (
            <span className="text-xs font-mono bg-[#3B82F6]/20 text-[#3B82F6] px-2 py-0.5 rounded">
              PRIMARY
            </span>
          )}
        </div>
        {(text || application) && (
          isExpanded
            ? <ChevronUp className="w-4 h-4 text-white/30 flex-shrink-0" />
            : <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0" />
        )}
      </button>

      {isExpanded && (text || application) && (
        <div className="px-4 pb-4 border-t border-[#333333]/50 pt-3 space-y-3">
          {text && (
            <p className="text-sm italic text-white/70 leading-relaxed font-sans">
              &ldquo;{text}&rdquo;
            </p>
          )}
          {application && (
            <p className="text-xs text-white/50 leading-relaxed font-sans">
              {application}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
