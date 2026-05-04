import { Users, Eye, Vote, Skull } from "lucide-react";

const rules = [
  { icon: Eye, title: "No Stream Sniping", desc: "Don't watch the stream while playing. Keep it fair for everyone." },
  { icon: Vote, title: "Voice Required", desc: "Be in the Discord voice channel during meetings to vote and discuss." },
  { icon: Users, title: "Be Respectful", desc: "No toxicity, slurs, or harassment. Mute = ban from future lobbies." },
  { icon: Skull, title: "Play to Win", desc: "AFK or throwing the game on purpose? You'll get kicked from the lobby." },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-24 px-6">
      <div className="container max-w-5xl">
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-secondary font-semibold mb-4">
            Crewmate Code
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
            Lobby <span className="text-gradient-neon">Rules</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Quick read before you drop in. Break these and you're ejected — for real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {rules.map((r, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-[0_0_25px_hsl(var(--primary)/0.4)] group-hover:scale-110 transition-transform">
                  <r.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-1.5">{r.title}</h3>
                  <p className="text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
