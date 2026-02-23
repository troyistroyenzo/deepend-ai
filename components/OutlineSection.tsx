'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';

interface OutlineSectionProps {
  name: string;
  description: string;
  timestamp?: string;
  index?: number;
}

export default function OutlineSection({ name, description, timestamp, index = 0 }: OutlineSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#333333] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left hover:bg-[#1A1A1A] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-white/20 w-6 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono font-semibold text-sm uppercase tracking-wide">{name}</span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {timestamp && (
            <div className="flex items-center gap-1 text-xs font-mono text-white/30">
              <Clock className="w-3 h-3" />
              {timestamp}
            </div>
          )}
          {isOpen
            ? <ChevronUp className="w-4 h-4 text-white/30" />
            : <ChevronDown className="w-4 h-4 text-white/30" />
          }
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-2 border-t border-[#333333]/50 bg-[#0A0A0A]">
          <p className="text-sm text-white/60 leading-relaxed font-sans pl-9">{description}</p>
        </div>
      )}
    </div>
  );
}
