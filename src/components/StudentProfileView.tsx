import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Globe } from "lucide-react";
import { Student } from "@/data/students";

interface StudentProfileViewProps {
  student: Student | null;
}

const STLR_ICONS = {
  leadership: "🧭",
  research: "🔬", 
  "global-cultural": "🌍",
  "experiential-learning": "🎯",
  "community-engagement": "🤝"
};

export function StudentProfileView({ student }: StudentProfileViewProps) {
  if (!student) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-medium text-muted-foreground mb-2">
            Select a student to view their profile
          </h3>
          <p className="text-sm text-muted-foreground">
            Choose from the list to see their journey and achievements
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-2xl mx-auto p-8">
        {/* Profile Header */}
        <div className="flex items-start gap-6 mb-8">
          <div className="relative">
            <img
              src={student.profileImage}
              alt={`${student.name} profile`}
              className="w-24 h-24 rounded-full object-cover border-2 border-border/50"
            />
            <div className="absolute -top-2 -right-2 bg-uco-blue text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
              GRAD. {student.gradYear}
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {student.name}
            </h1>
            <p className="text-lg text-uco-blue font-medium mb-4">
              {student.major}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {student.bio}
            </p>
          </div>
        </div>

        {/* Extended Bio */}
        {student.fullBio && (
          <div className="mb-8">
            <div className="prose prose-invert max-w-none">
              {student.fullBio.split('\n\n').slice(1).map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {(student.links.linkedin || student.links.github || student.links.portfolio) && (
          <div className="flex items-center gap-3 mb-8">
            {student.links.linkedin && (
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href={student.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )}
            {student.links.github && (
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href={student.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {student.links.portfolio && (
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href={student.links.portfolio} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        )}

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {student.skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground border-border/30"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* STLR Tenets */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">STLR Engagement</h3>
          <div className="flex flex-wrap gap-4">
            {student.stlrTenets.map((tenet) => (
              <div 
                key={tenet} 
                className="flex items-center gap-2 text-sm text-muted-foreground"
                title={tenet.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase())}
              >
                <span className="text-lg">
                  {STLR_ICONS[tenet as keyof typeof STLR_ICONS] || "⭐"}
                </span>
                <span>{tenet.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase())}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}