import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface StudentCardProps {
  student: {
    id: string;
    name: string;
    major: string;
    bio: string;
    skills: string[];
    profileImage: string;
    links: {
      linkedin?: string;
      github?: string;
      portfolio?: string;
    };
    stlrTenets: string[];
  };
  className?: string;
  onClick?: () => void;
}

const STLR_ICONS = {
  leadership: "🧭",
  research: "🔬", 
  "global-cultural": "🌍",
  "experiential-learning": "🎯",
  "community-engagement": "🤝"
};

export function StudentCard({ student, className, onClick }: StudentCardProps) {
  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-gradient-card border-border/50 hover:border-primary/20 overflow-hidden",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={student.profileImage}
              alt={`${student.name} profile`}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {student.name}
                </h3>
                <p className="text-sm text-uco-blue font-medium">{student.major}</p>
              </div>
              
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {student.links.linkedin && (
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
                    <Linkedin className="h-4 w-4" />
                  </Button>
                )}
                {student.links.github && (
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
                    <Github className="h-4 w-4" />
                  </Button>
                )}
                {student.links.portfolio && (
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
                    <Globe className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {student.bio}
            </p>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-wrap gap-1">
                {student.skills.slice(0, 3).map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
                {student.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{student.skills.length - 3}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center space-x-1">
                {student.stlrTenets.map((tenet) => (
                  <span 
                    key={tenet} 
                    className="text-lg"
                    title={tenet.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase())}
                  >
                    {STLR_ICONS[tenet as keyof typeof STLR_ICONS] || "⭐"}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>View Full Profile</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}