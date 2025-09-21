import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Linkedin, Globe } from "lucide-react";
import { sampleStudents, Student } from "@/data/students";

const STLR_INFO = {
  leadership: { icon: "🧭", name: "Leadership", description: "Developing leadership skills and taking initiative" },
  research: { icon: "🔬", name: "Research", description: "Engaging in scholarly inquiry and investigation" },
  "global-cultural": { icon: "🌍", name: "Global & Cultural Competency", description: "Understanding diverse perspectives and cultures" },
  "experiential-learning": { icon: "🎯", name: "Experiential Learning", description: "Learning through hands-on experience and reflection" },
  "community-engagement": { icon: "🤝", name: "Community Engagement", description: "Contributing to community development and service" }
};

export default function StudentProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const student = sampleStudents.find(s => s.id === id);
  
  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Student Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Students
        </Button>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <img
                  src={student.profileImage}
                  alt={`${student.name} profile`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-card"
                />
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">{student.name}</h1>
                    <p className="text-xl text-uco-blue font-medium">{student.major}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {student.links.linkedin && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                        <a href={student.links.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {student.links.github && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                        <a href={student.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {student.links.portfolio && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                        <a href={student.links.portfolio} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4" />
                          Portfolio
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio Section */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">About {student.name.split(' ')[0]}</h2>
              <div className="prose prose-invert max-w-none">
                {(student.fullBio || student.bio).split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* STLR Tenets */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">STLR Engagement</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {student.stlrTenets.map((tenet) => {
                  const info = STLR_INFO[tenet as keyof typeof STLR_INFO];
                  return (
                    <div key={tenet} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/30">
                      <div className="text-3xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.name}</h3>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Skills Breakdown */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {student.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline"
                    className="px-4 py-2 text-sm border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}