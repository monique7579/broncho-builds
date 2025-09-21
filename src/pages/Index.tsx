import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { StudentList } from "@/components/StudentList";
import { StudentProfileView } from "@/components/StudentProfileView";
import { SkillsFilter } from "@/components/SkillsFilter";
import { sampleStudents, Student } from "@/data/students";

const Index = () => {
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(sampleStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(sampleStudents[0]);
  const [searchQuery, setSearchQuery] = useState("");

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

    setFilteredStudents(filtered);
    
    // Update selected student if current selection is not in filtered results
    if (selectedStudent && !filtered.find(s => s.id === selectedStudent.id)) {
      setSelectedStudent(filtered[0] || null);
    }
  }, [searchQuery, selectedStudent]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleStudentSelect = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleFilterChange = (filters: { primary: string[], secondary: string[] }) => {
    let filtered = sampleStudents;

    // Apply search filter first
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(student => 
        student.name.toLowerCase().includes(query) ||
        student.major.toLowerCase().includes(query) ||
        student.bio.toLowerCase().includes(query) ||
        student.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Apply skills filters
    if (filters.primary.length > 0 || filters.secondary.length > 0) {
      const allFilters = [...filters.primary, ...filters.secondary];
      filtered = filtered.filter(student =>
        allFilters.some(filter =>
          student.skills.some(skill => 
            skill.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }

    setFilteredStudents(filtered);
    
    // Update selected student if current selection is not in filtered results
    if (selectedStudent && !filtered.find(s => s.id === selectedStudent.id)) {
      setSelectedStudent(filtered[0] || null);
    }
  };

  return (
    <Layout>
      <div className="flex h-screen">
        <StudentList
          students={filteredStudents}
          selectedStudent={selectedStudent}
          onStudentSelect={handleStudentSelect}
          onSearch={handleSearch}
        />
        
        <StudentProfileView student={selectedStudent} />
        
        <SkillsFilter onFilterChange={handleFilterChange} />
      </div>
    </Layout>
  );
};

export default Index;
