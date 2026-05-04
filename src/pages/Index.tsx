import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import StatusBadge from "@/components/StatusBadge";
import StatsRow from "@/components/StatsRow";
import JoinModal from "@/components/JoinModal";
import RulesSection from "@/components/RulesSection";
import Header from "@/components/Header";
import { useConfig } from "@/lib/config-store";

const Index = () => {
  const [cfg] = useConfig();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground relative overflow-x-hidden">
      <Header streamerName={cfg.streamerName} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
        <ParticleField />

        <div className="relative z-10 container max-w-5xl text-center">
          <div className="animate-fade-in-down flex justify-center mb-6">
            <StatusBadge live={cfg.isLive} />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight animate-fade-in">
            <span className="block text-foreground">Play Among Us</span>
            <span className="block mt-2 text-gradient-neon drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
              with {cfg.streamerName}
            </span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "120ms" }}>
            {cfg.bannerText} Random lobbies. Real chaos. One Discord click away.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "220ms" }}>
            <Button
              size="xl"
              variant="hero"
              onClick={() => setOpen(true)}
              disabled={!cfg.isLive}
              className="group"
            >
              <Zap className="w-5 h-5" />
              {cfg.isLive ? "Join Game Now" : "Lobby Offline"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button asChild size="xl" variant="neon">
              <a href="#rules">Read the Rules</a>
            </Button>
          </div>

          <div className="mt-16 animate-fade-in" style={{ animationDelay: "320ms" }}>
            <StatsRow playersToday={cfg.playersToday} />
          </div>
        </div>

        {/* fade gradient */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      </section>

      <RulesSection />

      <footer className="border-t border-border/40 py-8 px-6 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {cfg.streamerName}.HUB · Not affiliated with InnerSloth.
        </p>
      </footer>

      <JoinModal open={open} onOpenChange={setOpen} discordUrl={cfg.discordUrl} />
    </div>
  );
};

export default Index;
