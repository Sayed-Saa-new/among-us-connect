import { Link } from "react-router-dom";
import { Github, Twitter, Twitch, MessageCircle, Heart } from "lucide-react";
import crewRed from "@/assets/crewmate-red.png";

const Footer = ({ discordUrl }: { discordUrl: string }) => {
  return (
    <footer className="relative mt-16 border-t border-border overflow-hidden">
      {/* Glow accent */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img src={crewRed} alt="" width={32} height={32} className="w-8 h-8" />
              <span className="font-display text-xl font-extrabold tracking-wide">
                Sadik<span className="text-muted-foreground">.hub</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              The fastest way to drop into a live Among Us lobby with Sadik.
              Random players, real chaos, one Discord click away.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: MessageCircle, href: discordUrl, label: "Discord" },
                { icon: Twitch, href: "#", label: "Twitch" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg surface surface-hover text-muted-foreground hover:text-foreground"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Lobby
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#rules" className="text-foreground/80 hover:text-primary transition-colors">Rules</a></li>
              <li><a href={discordUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">Join Discord</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-primary transition-colors">Schedule</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Built by
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://flinkeo.online" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                  Flinkeo.online
                </a>
                <span className="text-muted-foreground"> — Studio</span>
              </li>
              <li>
                <a href="https://portfolio.flinkeo.online" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                  Abushaid Islam Sayd
                </a>
                <span className="text-muted-foreground"> — Developer</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 Flinkeo · All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> for crewmates &amp; impostors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
