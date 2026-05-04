import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Copy, ExternalLink, Mic, LogIn, Gamepad2 } from "lucide-react";
import { toast } from "sonner";
import crewCyan from "@/assets/crewmate-cyan.png";

type Props = {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  discordUrl: string;
};

const steps = [
  { icon: LogIn, title: "Join the Discord", desc: "Click the invite to enter the server." },
  { icon: Mic, title: "Hop in voice", desc: "Find the active Among Us voice channel." },
  { icon: Gamepad2, title: "Start playing", desc: "Get the room code and dive in." },
];

const JoinModal = ({ open, onOpenChange, discordUrl }: Props) => {
  const [name, setName] = useState("");

  const handleJoin = () => {
    window.open(discordUrl, "_blank", "noopener,noreferrer");
    toast.success(name ? `Good luck, ${name}!` : "Opening Discord");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(discordUrl);
    toast.success("Invite link copied");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="surface max-w-lg p-0 overflow-hidden">
        <div className="p-7">
          <div className="flex items-center gap-3 mb-1">
            <img src={crewCyan} alt="" width={40} height={40} className="w-10 h-10" />
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Ready to drop in?</DialogTitle>
            </DialogHeader>
          </div>
          <p className="text-muted-foreground text-sm">Three quick steps and you're in the lobby.</p>

          <div className="mt-6 space-y-2">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border">
                <div className="shrink-0 w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">{s.title}</div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">
              Crewmate name <span className="opacity-60">(optional)</span>
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. RedSus"
              className="bg-muted/50"
            />
          </div>

          <div className="mt-5 flex gap-2">
            <Button onClick={handleJoin} variant="hero" size="lg" className="flex-1">
              <ExternalLink className="w-4 h-4" />
              Join Discord
            </Button>
            <Button onClick={copyLink} variant="neon" size="lg">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinModal;
