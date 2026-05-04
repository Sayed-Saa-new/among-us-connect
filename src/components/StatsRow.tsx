import { useEffect, useState } from "react";
import { Users, Wifi, Trophy } from "lucide-react";

const Stat = ({ icon: Icon, label, value, suffix = "", glow }: any) => (
  <div className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:translate-y-[-2px] transition-transform duration-300">
    <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${glow}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <div className="font-display text-2xl md:text-3xl font-bold text-foreground tabular-nums">
        {value.toLocaleString()}{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{label}</div>
    </div>
  </div>
);

const StatsRow = ({ playersToday }: { playersToday: number }) => {
  const [online, setOnline] = useState(0);
  const [total, setTotal] = useState(playersToday);

  useEffect(() => {
    setOnline(Math.floor(Math.random() * 60) + 80);
    const t = setInterval(() => {
      setOnline((o) => Math.max(40, Math.min(180, o + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 4))));
      setTotal((t) => t + (Math.random() > 0.7 ? 1 : 0));
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
      <Stat icon={Wifi} label="Players Online" value={online} glow="bg-accent/15 text-accent shadow-[0_0_20px_hsl(var(--accent)/0.4)]" />
      <Stat icon={Users} label="Joined Today" value={total} glow="bg-primary/15 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]" />
      <Stat icon={Trophy} label="Games Played" value={4821} glow="bg-secondary/15 text-secondary shadow-[0_0_20px_hsl(var(--secondary)/0.4)]" />
    </div>
  );
};

export default StatsRow;
