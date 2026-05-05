import { Users, Eye, Vote, Skull } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <section id="rules" className="relative py-20 md:py-28 px-4 sm:px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full surface text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-5">
            Lobby Rules
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            Read this before <span className="text-primary">you drop in</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Quick guidelines so everyone has a good time — keep it fair, keep it fun.
          </p>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="space-y-3">
            {rules.map((r, i) => (
              <AccordionItem
                key={i}
                value={`rule-${i}`}
                className="surface rounded-xl border-border px-4 overflow-hidden relative"
              >
                <img
                  src={r.img}
                  alt=""
                  aria-hidden
                  className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20 pointer-events-none"
                />
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <r.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-muted-foreground tracking-wider">
                        RULE / {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="font-display text-base font-semibold">{r.title}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 pl-12">
                  {r.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block">
          <Carousel opts={{ align: "start", loop: false }} className="relative px-12">
            <CarouselContent className="-ml-4">
              {rules.map((r, i) => (
                <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <div className="group relative h-72 rounded-2xl overflow-hidden surface surface-hover">
                    <img
                      src={r.img}
                      alt=""
                      aria-hidden
                      className="absolute -right-6 -bottom-6 w-48 h-48 max-w-full h-auto object-contain opacity-30 transition-all duration-500 pointer-events-none group-hover:opacity-80 group-hover:animate-crew-hover group-hover:[filter:drop-shadow(0_0_30px_hsl(var(--primary)/0.7))_drop-shadow(0_0_60px_hsl(var(--primary)/0.4))]"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${r.tint} via-transparent to-transparent pointer-events-none`} />
                    <div className="relative z-10 h-full p-6 flex flex-col">
                      <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                        <r.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xs font-mono text-muted-foreground mb-1.5 tracking-wider">
                        RULE / {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2 leading-snug">{r.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 bg-card/80 border-border hover:border-primary/50" />
            <CarouselNext className="-right-2 bg-card/80 border-border hover:border-primary/50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
