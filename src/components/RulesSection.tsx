import { Users, Eye, Vote, Skull } from "lucide-react";

const rules = [
  { icon: Eye, title: "No stream sniping", desc: "Don't watch the stream while playing. Keep it fair for everyone." },
  { icon: Vote, title: "Voice required", desc: "Be in the Discord voice channel during meetings to vote and discuss." },
  { icon: Users, title: "Be respectful", desc: "No toxicity, slurs, or harassment. One warning, then ban." },
  { icon: Skull, title: "Play to win", desc: "AFK or throwing? You'll get kicked from the lobby." },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-24 px-6 border-t border-border">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full surface text-xs font-medium text-muted-foreground mb-4">
            Lobby Rules
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 tracking-tight">
            Read this before <span className="text-primary">you drop in</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Quick guidelines so everyone has a good time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {rules.map((r, i) => (
            <div key={i} className="surface surface-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{r.title}</h3>
                  <p className="text-muted-foreground text-sm">{r.desc}</p>
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
