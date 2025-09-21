import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpDown } from "lucide-react";
import { Student } from "@/data/students";
import { cn } from "@/lib/utils";

interface StudentListProps {
  students: Student[];
  selectedStudent: Student | null;
  onStudentSelect: (student: Student) => void;
  onSearch: (query: string) => void;
}

export function StudentList({ students, selectedStudent, onStudentSelect, onSearch }: StudentListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedStudents = [...students].sort((a, b) => {
    return sortOrder === 'asc' 
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="w-80 bg-background border-r border-border/50 h-screen overflow-hidden flex flex-col">
      {/* Search */}
      <div className="p-4 border-b border-border/50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 bg-muted/30 border-border/50 focus:bg-muted/50"
          />
        </div>
      </div>

      {/* Column Headers */}
      <div className="flex items-center px-4 py-3 border-b border-border/50 bg-muted/20">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSort}
          className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground p-0 h-auto"
        >
          <span className="flex-1 text-left">NAME</span>
          <ArrowUpDown className="h-3 w-3" />
        </Button>
        <div className="flex-1 text-xs font-medium text-muted-foreground text-right pr-2">
          SITE
        </div>
      </div>

      {/* Student List */}
      <div className="flex-1 overflow-y-auto">
        {sortedStudents.map((student) => (
          <div
            key={student.id}
            onClick={() => onStudentSelect(student)}
            className={cn(
              "flex items-center justify-between px-4 py-3 cursor-pointer transition-colors border-b border-border/30 hover:bg-muted/30",
              selectedStudent?.id === student.id && "bg-muted/50 border-primary/20"
            )}
          >
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">
                {student.name}
              </div>
            </div>
            <div className="text-xs text-muted-foreground ml-4">
              {student.links.portfolio ? "portfolio" : 
               student.links.linkedin ? "linkedin" : 
               student.links.github ? "github" : "profile"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}