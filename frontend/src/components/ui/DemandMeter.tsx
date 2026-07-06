import { cn } from '../../utils/cn';

interface DemandMeterProps {
  value: number; // 0-100
  className?: string;
}

export function DemandMeter({ value, className }: DemandMeterProps) {
  const blocks = 10;
  const filledBlocks = Math.round((value / 100) * blocks);
  
  let colorClass = 'bg-spot-green';
  if (value > 85) colorClass = 'bg-spot-red';
  else if (value > 60) colorClass = 'bg-spot-amber';

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex gap-1">
        {Array.from({ length: blocks }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-2 h-5 rounded-sm transition-colors duration-500",
              i < filledBlocks ? colorClass : "bg-gray-200"
            )}
          />
        ))}
      </div>
      <div className="text-xl font-semibold w-12 text-right">
        {value}%
      </div>
    </div>
  );
}
