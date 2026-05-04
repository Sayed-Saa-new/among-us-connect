import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Copy, ExternalLink, Mic, LogIn, Gamepad2 } from "lucide-react";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  discordUrl: string;
};

const steps = [
  { icon: LogIn, title: "Join the Discord", desc: "Click the invite link to enter the server." },
  { icon: Mic, title: "Hop in voice", desc: "Find the active Among Us voice channel." },
  { icon: Gamepad2, title: "Start playing", desc: "Get the room code & dive into the game." },
];

const JoinModal = ({ open, onOpenChange, discordUrl }: Props) => {
  const [name, setName] = useState("");

  const handleJoin = () => {
    window.open(discordUrl, "_blank", "noopener,noreferrer");
    toast.success(name ? `Good luck, ${name}!` : "Opening Discord…", {
      description: "See you in the lobby, crewmate.",
    });
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(discordUrl);
    toast.success("Invite link copied");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-primary/30 max-w-lg p-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-neon" />
        <div className="p-7">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              <span className="text-gradient-neon">Ready to Drop In?</span>
            </DialogTitle>
            <p className="text-muted-foreground text-base mt-1">
              Three quick steps and you're in the lobby.
            </p>
          </DialogHeader>

          <div className="mt-6 space-y-3">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-3.5 rounded-xl bg-muted/40 border border-border/50 hover:border-primary/40 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{s.title}</div>
                  <div className="text-sm text-muted-foreground">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Crewmate name <span className="opacity-60">(optional)</span>
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. RedSus"
              className="bg-muted/50 border-border focus-visible:ring-primary"
            />
          </div>

          <div className="mt-6 flex gap-2">
            <Button onClick={handleJoin} variant="hero" size="lg" className="flex-1">
              <ExternalLink className="w-5 h-5" />
              Join Discord
            </Button>
            <Button onClick={copyLink} variant="outline" size="lg" className="border-primary/40 hover:bg-primary/10">
              <Copy className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinModal;
