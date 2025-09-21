import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            bronchobuilds
          </div>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            join
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}