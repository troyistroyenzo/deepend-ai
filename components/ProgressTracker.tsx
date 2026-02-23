interface ProgressTrackerProps {
  completed: number;
  total: number;
  color?: string;
  label?: string;
}

const colorMap: Record<string, string> = {
  spirit: 'bg-[#3B82F6]',
  flesh: 'bg-[#EF4444]',
  trauma: 'bg-[#F97316]',
  healing: 'bg-[#10B981]',
  integration: 'bg-[#8B5CF6]',
};

export default function ProgressTracker({
  completed,
  total,
  color = 'spirit',
  label,
}: ProgressTrackerProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const barColor = colorMap[color] ?? colorMap.spirit;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {label && (
          <span className="text-xs font-mono text-white/50 uppercase tracking-wider">{label}</span>
        )}
        <span className="text-xs font-mono text-white/50 ml-auto">
          {completed}/{total} &nbsp;·&nbsp; {percentage}%
        </span>
      </div>
      <div className="h-1.5 bg-[#333333] rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
