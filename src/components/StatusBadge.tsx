import { cn } from "@/lib/utils";

const StatusBadge = ({ live, className }: { live: boolean; className?: string }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-sm font-semibold tracking-wide uppercase",
        className
      )}
    >
      <span
        className={cn(
          "w-2.5 h-2.5 rounded-full",
          live ? "bg-accent animate-pulse-glow" : "bg-destructive animate-pulse-glow-red"
        )}
      />
      <span className={live ? "text-accent" : "text-destructive"}>
        {live ? "Game Live Now" : "Offline"}
      </span>
    </div>
  );
};

export default StatusBadge;
