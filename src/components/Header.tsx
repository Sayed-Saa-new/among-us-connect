import { Link } from "react-router-dom";
import crewRed from "@/assets/crewmate-red.png";

const Header = () => {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={crewRed} alt="" width={32} height={32} className="w-8 h-8" />
          <div className="font-display text-xl font-extrabold tracking-wide text-foreground drop-shadow-[0_2px_10px_hsl(var(--primary)/0.35)]">
            Sadik<span className="text-muted-foreground">.hub</span>
          </div>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <a href="#rules" className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">Rules</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
