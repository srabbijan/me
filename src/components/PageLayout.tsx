import { ReactNode, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CommandPalette } from "./CommandPalette";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};
