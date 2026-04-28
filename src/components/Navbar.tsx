import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Command, Download } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { generateResumePDF } from "@/lib/resume";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = ({ onOpenPalette }: { onOpenPalette: () => void }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-elegant" : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground font-mono">
            AC
          </span>
          <span className="hidden sm:inline">Alex Chen</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm transition-colors",
                  active ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={generateResumePDF}
            className="hidden md:flex gap-2"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenPalette}
            className="hidden sm:flex gap-2 text-muted-foreground font-mono text-xs"
          >
            <Command className="h-3 w-3" />
            <span>K</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </nav>
    </header>
  );
};
