import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search, Menu, X, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: string[]) => void;
}

export function Navigation({ onSearch, onFilterChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const skills = [
    "Python", "JavaScript", "React", "AI/ML", "Data Science", 
    "UX/UI Design", "Leadership", "Research", "Web Development",
    "Mobile Development", "System Design", "Cybersecurity"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const toggleFilter = (skill: string) => {
    const newFilters = selectedFilters.includes(skill)
      ? selectedFilters.filter(f => f !== skill)
      : [...selectedFilters, skill];
    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          BronchoBuilds
        </div>

        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
          <form onSubmit={handleSearch} className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search students, skills, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-border focus:bg-card"
              />
            </div>
          </form>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
                {selectedFilters.length > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    {selectedFilters.length}
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Filter by Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill) => (
                    <Button
                      key={skill}
                      variant={selectedFilters.includes(skill) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleFilter(skill)}
                      className="justify-start"
                    >
                      {skill}
                    </Button>
                  ))}
                </div>
                {selectedFilters.length > 0 && (
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setSelectedFilters([]);
                      onFilterChange?.([]);
                    }}
                    className="w-full"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                Join BronchoBuilds
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Join BronchoBuilds</h2>
                  <p className="text-muted-foreground">Share your journey and showcase your skills to the UCO community.</p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Major" />
                  <Input placeholder="Skills (comma separated)" />
                  <textarea 
                    className="w-full min-h-[100px] px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us about your learning journey..."
                  />
                  <div className="space-y-2">
                    <Input placeholder="LinkedIn URL (optional)" />
                    <Input placeholder="GitHub URL (optional)" />
                    <Input placeholder="Portfolio URL (optional)" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-hero">
                    Submit for Review
                  </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border p-4 space-y-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </form>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 6).map((skill) => (
              <Button
                key={skill}
                variant={selectedFilters.includes(skill) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(skill)}
              >
                {skill}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}