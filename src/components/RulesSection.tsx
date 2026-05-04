import { Users, Eye, Vote, Skull } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import crewRed from "@/assets/crewmate-red.png";
import crewCyan from "@/assets/crewmate-cyan.png";
import crewPurple from "@/assets/crewmate-purple.png";
import crewGreen from "@/assets/crewmate-green.png";

const rules = [
  { icon: Eye, title: "No stream sniping", desc: "Don't watch the stream while playing. Keep it fair for everyone.", img: crewRed, tint: "from-rose-500/20" },
  { icon: Vote, title: "Voice required", desc: "Be in the Discord voice channel during meetings to vote and discuss.", img: crewCyan, tint: "from-cyan-500/20" },
  { icon: Users, title: "Be respectful", desc: "No toxicity, slurs, or harassment. One warning, then ban.", img: crewPurple, tint: "from-violet-500/20" },
  { icon: Skull, title: "Play to win", desc: "AFK or throwing? You'll get kicked from the lobby.", img: crewGreen, tint: "from-emerald-500/20" },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-24 px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full surface text-xs font-medium text-muted-foreground mb-4">
            Lobby Rules
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Read this before <span className="text-primary">you drop in</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Swipe through the rules — quick guidelines so everyone has a good time.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: false }}
          className="relative px-2 md:px-12"
        >
          <CarouselContent className="-ml-4">
            {rules.map((r, i) => (
              <CarouselItem key={i} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <div className="group relative h-72 rounded-2xl overflow-hidden surface surface-hover">
                  {/* Crewmate background */}
                  <img
                    src={r.img}
                    alt=""
                    aria-hidden
                    style={{ filter: "drop-shadow(0 0 0 transparent)" }}
                    className="absolute -right-6 -bottom-6 w-48 h-48 max-w-full h-auto object-contain opacity-30 transition-all duration-500 pointer-events-none group-hover:opacity-80 group-hover:animate-crew-hover group-hover:[filter:drop-shadow(0_0_30px_hsl(var(--primary)/0.7))_drop-shadow(0_0_60px_hsl(var(--primary)/0.4))]"
                  />
                  {/* Tint gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${r.tint} via-transparent to-transparent pointer-events-none`} />
                  {/* Content */}
                  <div className="relative z-10 h-full p-6 flex flex-col">
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <r.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">
                      RULE / {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">{r.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-2 bg-card/80 border-border hover:border-primary/50" />
          <CarouselNext className="hidden md:flex -right-2 bg-card/80 border-border hover:border-primary/50" />
        </Carousel>
      </div>
    </section>
  );
};

export default RulesSection;
