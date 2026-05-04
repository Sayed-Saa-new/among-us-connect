import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import crewRed from "@/assets/crewmate-red.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container flex items-center justify-between py-5 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={crewRed} alt="" width={32} height={32} className="w-8 h-8 max-w-full h-auto" />
          <div className="font-display text-xl font-extrabold tracking-wide text-foreground drop-shadow-[0_2px_10px_hsl(var(--primary)/0.35)]">
            Sadik<span className="text-muted-foreground">.hub</span>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-5 text-sm font-medium">
          <a href="#rules" className="text-muted-foreground hover:text-foreground transition-colors">Rules</a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-border bg-card/80 text-foreground"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="sm:hidden px-4 pb-4">
          <nav className="surface rounded-xl px-4 py-3">
            <a
              href="#rules"
              onClick={() => setMenuOpen(false)}
              className="block min-h-11 py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              Rules
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
