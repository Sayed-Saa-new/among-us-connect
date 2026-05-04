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
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1600 1000"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <g opacity="0.085" stroke="hsl(var(--border))" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" transform="translate(-20 -40) scale(1.08)">
            <path d="M120 410L270 260H520L620 180H1030L1130 250H1320L1470 390L1460 700L1320 845H1040L980 900H500L430 840H250L120 700Z" />
            <path d="M220 410L330 300H525L650 230H1005L1115 300H1270L1375 410L1368 675L1260 785H1025L945 845H550L470 785H330L220 690Z" />
            <path d="M660 230V845" />
            <path d="M940 230V845" />
            <path d="M520 520H1130" />
            <path d="M330 640H1270" />

            <rect x="300" y="320" width="190" height="130" rx="12" />
            <rect x="700" y="280" width="210" height="150" rx="14" />
            <rect x="1040" y="330" width="185" height="120" rx="12" />
            <rect x="1060" y="560" width="210" height="150" rx="14" />
            <rect x="720" y="690" width="190" height="120" rx="12" />
            <rect x="390" y="560" width="180" height="140" rx="12" />
            <rect x="255" y="500" width="120" height="175" rx="12" />
            <rect x="1240" y="470" width="110" height="190" rx="12" />

            <path d="M490 385H700" />
            <path d="M910 355H1040" />
            <path d="M1132 450V560" />
            <path d="M1060 635H910" />
            <path d="M720 750H570" />
            <path d="M390 630H375" />
            <path d="M1225 620H1240" />

            <path d="M275 548H365M275 585H365M275 622H365" />
            <path d="M315 320H475M315 350H475" />
            <path d="M1080 582H1240M1080 612H1240" />
            <path d="M755 722H875M755 752H875" />
            <path d="M740 310H870M740 340H870" />
          </g>

          <g opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" strokeLinecap="round" transform="translate(-20 -40) scale(1.08)">
            <circle cx="812" cy="358" r="17" />
            <path d="M800 358H824M812 346V370" />

            <circle cx="1138" cy="626" r="15" />
            <path d="M1128 626H1148M1138 616V636" />

            <circle cx="472" cy="612" r="14" />
            <path d="M462 612H482M472 602V622" />
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
