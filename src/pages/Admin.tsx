import { useConfig } from "@/lib/config-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import StatusBadge from "@/components/StatusBadge";

const Admin = () => {
  const [cfg, setCfg] = useConfig();
  const [draft, setDraft] = useState(cfg);

  useEffect(() => setDraft(cfg), [cfg]);

  const save = () => {
    setCfg(draft);
    toast.success("Config updated", { description: "Changes are live on the landing page." });
  };

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground relative">
      <div className="container max-w-2xl py-12 px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to site
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-gradient-neon">Admin</span> Panel
            </h1>
            <p className="text-muted-foreground mt-1">Control the landing page in real time.</p>
          </div>
          <StatusBadge live={draft.isLive} />
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between p-4 rounded-xl bg-muted/40 border border-border">
            <div>
              <Label className="font-display uppercase tracking-wider text-sm">Live Status</Label>
              <p className="text-sm text-muted-foreground">Toggle the lobby on/off.</p>
            </div>
            <Switch
              checked={draft.isLive}
              onCheckedChange={(v) => setDraft({ ...draft, isLive: v })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="streamer">Streamer Name</Label>
            <Input id="streamer" value={draft.streamerName} onChange={(e) => setDraft({ ...draft, streamerName: e.target.value })} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="banner">Banner Text</Label>
            <Textarea id="banner" rows={2} value={draft.bannerText} onChange={(e) => setDraft({ ...draft, bannerText: e.target.value })} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discord">Discord Invite Link</Label>
            <Input id="discord" type="url" value={draft.discordUrl} onChange={(e) => setDraft({ ...draft, discordUrl: e.target.value })} placeholder="https://discord.gg/..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="players">Players Joined Today</Label>
            <Input id="players" type="number" value={draft.playersToday} onChange={(e) => setDraft({ ...draft, playersToday: Number(e.target.value) || 0 })} />
          </div>

          <Button onClick={save} variant="hero" size="lg" className="w-full">
            <Save className="w-5 h-5" /> Save Changes
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Settings are stored locally in this browser. Hook up Lovable Cloud for cross-device sync.
        </p>
      </div>
    </div>
  );
};

export default Admin;
