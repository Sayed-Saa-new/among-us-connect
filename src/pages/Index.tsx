import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import StatsRow from "@/components/StatsRow";
import JoinModal from "@/components/JoinModal";
import RulesSection from "@/components/RulesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCrewmates from "@/components/FloatingCrewmates";
import { HandWrittenTitle } from "@/components/HandWrittenTitle";
import { useConfig } from "@/lib/config-store";
import amongUsMap from "@/assets/among-us-map.png";

const Index = () => {
  const [cfg] = useConfig();
  const [open, setOpen] = useState(false);
  const streamerName = "Sadik";
  const discordUrl = "https://discord.gg/kz3T7vzM";

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden" style={{ background: "var(--gradient-bg)" }}>
      <Header />

      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6">
        {/* Among Us map background */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
          aria-hidden
        >
          <img
            src={amongUsMap}
            alt=""
            className="w-[180%] sm:w-[140%] md:w-[110%] lg:w-[95%] max-w-none object-contain opacity-25 sm:opacity-20 md:opacity-15"
            style={{
              filter: "invert(1) brightness(2) contrast(1.4)",
            }}
          />
        </div>
        {/* Soft radial vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_65%_at_50%_45%,transparent,hsl(var(--background))_95%)]" />
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
