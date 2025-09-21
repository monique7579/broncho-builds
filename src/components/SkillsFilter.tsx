import { useState } from "react";
import { cn } from "@/lib/utils";

interface SkillsFilterProps {
  onFilterChange: (filters: { primary: string[], secondary: string[] }) => void;
}

const PRIMARY_SKILLS = [
  "Backend", "Frontend", "Fullstack", "Mobile", "Design", "Product", 
  "Marketing", "Hardware", "Research", "Leadership"
];

const SECONDARY_SKILLS = [
  "Python", "JavaScript", "React", "AI/ML", "Data Science", 
  "UX/UI Design", "Cybersecurity", "System Design", "Analytics"
];

export function SkillsFilter({ onFilterChange }: SkillsFilterProps) {
  const [selectedPrimary, setSelectedPrimary] = useState<string[]>([]);
  const [selectedSecondary, setSelectedSecondary] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<'primary' | 'secondary'>('primary');

  const handlePrimaryToggle = (skill: string) => {
    const newSelected = selectedPrimary.includes(skill)
      ? selectedPrimary.filter(s => s !== skill)
      : [...selectedPrimary, skill];
    
    setSelectedPrimary(newSelected);
    onFilterChange({ primary: newSelected, secondary: selectedSecondary });
  };

  const handleSecondaryToggle = (skill: string) => {
    const newSelected = selectedSecondary.includes(skill)
      ? selectedSecondary.filter(s => s !== skill)
      : [...selectedSecondary, skill];
    
    setSelectedSecondary(newSelected);
    onFilterChange({ primary: selectedPrimary, secondary: newSelected });
  };

  return (
    <div className="w-72 bg-background border-l border-border/50 h-screen overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <h2 className="text-xl font-bold text-foreground mb-4">Skills</h2>
        
        {/* Category Toggle */}
        <div className="flex items-center gap-6 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <div 
              className={cn(
                "w-4 h-4 rounded-full border-2 transition-colors",
                activeCategory === 'primary' 
                  ? "border-primary bg-primary" 
                  : "border-border"
              )}
              onClick={() => setActiveCategory('primary')}
            >
              {activeCategory === 'primary' && (
                <div className="w-2 h-2 bg-primary-foreground rounded-full m-0.5" />
              )}
            </div>
            <span className="text-sm font-medium text-foreground">PRIMARY</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <div 
              className={cn(
                "w-4 h-4 rounded-full border-2 transition-colors",
                activeCategory === 'secondary' 
                  ? "border-primary bg-primary" 
                  : "border-border"
              )}
              onClick={() => setActiveCategory('secondary')}
            >
              {activeCategory === 'secondary' && (
                <div className="w-2 h-2 bg-primary-foreground rounded-full m-0.5" />
              )}
            </div>
            <span className="text-sm font-medium text-foreground">SECONDARY</span>
          </label>
        </div>
      </div>

      {/* Skills List */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeCategory === 'primary' ? (
          <div className="space-y-3">
            {PRIMARY_SKILLS.map((skill) => (
              <label key={skill} className="flex items-center gap-3 cursor-pointer group">
                <div 
                  className={cn(
                    "w-4 h-4 rounded-full border-2 transition-colors",
                    selectedPrimary.includes(skill)
                      ? "border-primary bg-primary" 
                      : "border-border group-hover:border-primary/50"
                  )}
                  onClick={() => handlePrimaryToggle(skill)}
                >
                  {selectedPrimary.includes(skill) && (
                    <div className="w-2 h-2 bg-primary-foreground rounded-full m-0.5" />
                  )}
                </div>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </label>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {SECONDARY_SKILLS.map((skill) => (
              <label key={skill} className="flex items-center gap-3 cursor-pointer group">
                <div 
                  className={cn(
                    "w-4 h-4 rounded-full border-2 transition-colors",
                    selectedSecondary.includes(skill)
                      ? "border-primary bg-primary" 
                      : "border-border group-hover:border-primary/50"
                  )}
                  onClick={() => handleSecondaryToggle(skill)}
                >
                  {selectedSecondary.includes(skill) && (
                    <div className="w-2 h-2 bg-primary-foreground rounded-full m-0.5" />
                  )}
                </div>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}