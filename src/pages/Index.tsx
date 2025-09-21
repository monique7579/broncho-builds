import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/HeroSection";
import { StudentCard } from "@/components/StudentCard";
import { sampleStudents, Student } from "@/data/students";

const Index = () => {
  const navigate = useNavigate();
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(sampleStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    let filtered = sampleStudents;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(student => 
        student.name.toLowerCase().includes(query) ||
        student.major.toLowerCase().includes(query) ||
        student.bio.toLowerCase().includes(query) ||
        student.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Apply skill filters
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(student =>
        selectedFilters.some(filter =>
          student.skills.some(skill => 
            skill.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }

    setFilteredStudents(filtered);
  }, [searchQuery, selectedFilters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  const handleStudentClick = (studentId: string) => {
    navigate(`/student/${studentId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={handleSearch} onFilterChange={handleFilterChange} />
      
      <HeroSection />
      
      <section id="students-section" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="bg-gradient-accent bg-clip-text text-transparent">Bronchos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the inspiring journeys and achievements of UCO students
            </p>
          </div>

          {filteredStudents.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No students found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onClick={() => handleStudentClick(student.id)}
                />
              ))}
            </div>
          )}

          {/* Load more section - for future implementation */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Showing {filteredStudents.length} of {sampleStudents.length} students
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
