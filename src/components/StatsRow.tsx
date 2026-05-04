import { useEffect, useState } from "react";
import { Users, Wifi, Trophy } from "lucide-react";

const Stat = ({ icon: Icon, label, value, suffix = "" }: any) => (
  <div className="surface surface-hover rounded-xl p-5">
    <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium mb-2">
      <Icon className="w-3.5 h-3.5" />
      <span className="uppercase tracking-wider">{label}</span>
    </div>
    <div className="font-display text-2xl md:text-3xl font-bold tabular-nums">
      {value.toLocaleString()}{suffix}
    </div>
  </div>
);

const StatsRow = ({ playersToday }: { playersToday: number }) => {
  const [online, setOnline] = useState(127);
  const [total, setTotal] = useState(playersToday);

  useEffect(() => {
    const t = setInterval(() => {
      setOnline((o) => Math.max(40, Math.min(200, o + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 4))));
      setTotal((t) => t + (Math.random() > 0.7 ? 1 : 0));
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mx-auto">
      <Stat icon={Wifi} label="Online" value={online} />
      <Stat icon={Users} label="Joined today" value={total} />
      <Stat icon={Trophy} label="Games played" value={4821} />
    </div>
  );
};

export default StatsRow;
