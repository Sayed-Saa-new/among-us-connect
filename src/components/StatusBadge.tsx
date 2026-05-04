import { cn } from "@/lib/utils";

const StatusBadge = ({ live, className }: { live: boolean; className?: string }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full surface text-xs font-medium",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {live && <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", live ? "bg-accent" : "bg-muted-foreground")} />
      </span>
      <span className={live ? "text-foreground" : "text-muted-foreground"}>
        {live ? "Live now" : "Offline"}
      </span>
    </div>
  );
};

export default StatusBadge;
