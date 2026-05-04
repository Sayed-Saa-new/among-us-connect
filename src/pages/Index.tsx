import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import StatsRow from "@/components/StatsRow";
import JoinModal from "@/components/JoinModal";
import RulesSection from "@/components/RulesSection";
import Header from "@/components/Header";
import FloatingCrewmates from "@/components/FloatingCrewmates";
import { HandWrittenTitle } from "@/components/HandWrittenTitle";
import { useConfig } from "@/lib/config-store";

const Index = () => {
  const [cfg] = useConfig();
  const [open, setOpen] = useState(false);
  const streamerName = "Sadik";
  const discordUrl = "https://discord.gg/kz3T7vzM";

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden" style={{ background: "var(--gradient-bg)" }}>
      <Header />

      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          aria-hidden="true"
        >
          <g opacity="0.06" stroke="hsl(var(--border))" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
            <rect x="80" y="110" width="210" height="130" rx="16" />
            <rect x="340" y="95" width="230" height="160" rx="18" />
            <rect x="680" y="140" width="260" height="140" rx="18" />
            <rect x="1080" y="90" width="220" height="170" rx="20" />
            <rect x="940" y="380" width="280" height="170" rx="20" />
            <rect x="560" y="470" width="240" height="180" rx="18" />
            <rect x="210" y="540" width="260" height="150" rx="18" />
            <rect x="1220" y="620" width="170" height="130" rx="16" />

            <path d="M290 170H340" />
            <path d="M570 175H680" />
            <path d="M940 200H1080" />
            <path d="M1110 260V380" />
            <path d="M940 465H800" />
            <path d="M560 560H470" />
            <path d="M340 540V255" />
            <path d="M1300 260V620" />

            <rect x="332" y="165" width="8" height="18" rx="2" />
            <rect x="676" y="166" width="8" height="18" rx="2" />
            <rect x="1076" y="192" width="8" height="18" rx="2" />
            <rect x="1106" y="374" width="8" height="18" rx="2" />
          </g>

          <g opacity="0.07" stroke="hsl(var(--primary))" strokeWidth="1" fill="none">
            <circle cx="750" cy="218" r="16" />
            <path d="M738 218H762M750 206V230" />

            <circle cx="1125" cy="455" r="14" />
            <path d="M1115 455H1135M1125 445V465" />

            <circle cx="355" cy="612" r="13" />
            <path d="M346 612H364M355 603V621" />
          </g>
        </svg>
        <FloatingCrewmates />

        <div className="relative z-10 container max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <StatusBadge live={cfg.isLive} />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Play Among Us with
          </h1>
          <HandWrittenTitle title={streamerName} subtitle="Random lobbies · One click away" />

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            {cfg.bannerText} Random lobbies. One Discord click away.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              variant="hero"
              onClick={() => setOpen(true)}
              disabled={!cfg.isLive}
              className="group w-full sm:w-auto"
            >
              {cfg.isLive ? "Join game now" : "Lobby offline"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button asChild size="lg" variant="neon" className="w-full sm:w-auto">
              <a href="#rules">Read the rules</a>
            </Button>
          </div>

          <div className="mt-16">
            <StatsRow playersToday={cfg.playersToday} />
          </div>
        </div>
      </section>

      <RulesSection />

      <footer className="border-t border-border py-8 px-4 sm:px-6 text-center text-sm text-muted-foreground space-y-2">
        <p>© 2026 Flinkeo · All rights reserved.</p>
        <p>
          Powered by{" "}
          <a
            href="https://flinkeo.online"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Flinkeo.online
          </a>
          .
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://portfolio.flinkeo.online"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Abushaid Islam Sayd
          </a>
          .
        </p>
      </footer>

      <JoinModal open={open} onOpenChange={setOpen} discordUrl={discordUrl} />
    </div>
  );
};

export default Index;
