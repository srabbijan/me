import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Home, User, Code2, Briefcase, Rocket, Mail, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export const CommandPalette = ({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const go = (hash: string) => {
    onOpenChange(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => go("#")}><Home className="mr-2 h-4 w-4" /> Home</CommandItem>
          <CommandItem onSelect={() => go("#about")}><User className="mr-2 h-4 w-4" /> About</CommandItem>
          <CommandItem onSelect={() => go("#skills")}><Code2 className="mr-2 h-4 w-4" /> Skills</CommandItem>
          <CommandItem onSelect={() => go("#experience")}><Briefcase className="mr-2 h-4 w-4" /> Experience</CommandItem>
          <CommandItem onSelect={() => go("#projects")}><Rocket className="mr-2 h-4 w-4" /> Projects</CommandItem>
          <CommandItem onSelect={() => go("#contact")}><Mail className="mr-2 h-4 w-4" /> Contact</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem onSelect={() => window.open("https://github.com", "_blank")}><Github className="mr-2 h-4 w-4" /> GitHub</CommandItem>
          <CommandItem onSelect={() => window.open("https://linkedin.com", "_blank")}><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Preferences">
          <CommandItem onSelect={() => { toggleTheme(); onOpenChange(false); }}>
            {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
            Toggle theme
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
