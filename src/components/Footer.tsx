export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div>© {new Date().getFullYear()} Md Fazle Rabbi.</div>
      <div className="font-mono text-xs">Software Engineer</div>
    </div>
  </footer>
);
