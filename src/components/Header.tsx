import { Link } from "react-router-dom";
import { Rocket, Settings } from "lucide-react";

const Header = ({ streamerName }: { streamerName: string }) => {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)] group-hover:rotate-12 transition-transform">
            <Rocket className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="font-display font-bold tracking-wider text-foreground">
            {streamerName}<span className="text-primary">.HUB</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
          <a href="#rules" className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">Rules</a>
          <Link to="/admin" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
            <Settings className="w-4 h-4" /> Admin
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
