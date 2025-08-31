import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, BookOpen, Download, Eye } from 'lucide-react';

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Business'];

  const notesData = [
    {
      id: 1,
      title: 'Calculus Fundamentals',
      subject: 'Mathematics',
      description: 'Complete guide to differential and integral calculus with solved examples and practice problems.',
      pages: 45,
      downloads: 1240,
      rating: 4.8,
      thumbnail: 'mathematics-calculus-notes',
    },
    {
      id: 2,
      title: 'Organic Chemistry Reactions',
      subject: 'Chemistry',
      description: 'Comprehensive study of organic reactions, mechanisms, and synthesis pathways.',
      pages: 67,
      downloads: 892,
      rating: 4.7,
      thumbnail: 'chemistry-organic-reactions',
    },
    {
      id: 3,
      title: 'Physics Mechanics',
      subject: 'Physics',
      description: 'Newton\'s laws, energy, momentum, and rotational dynamics explained with real-world examples.',
      pages: 52,
      downloads: 1056,
      rating: 4.9,
      thumbnail: 'physics-mechanics-guide',
    },
    {
      id: 4,
      title: 'Data Structures & Algorithms',
      subject: 'Computer Science',
      description: 'Essential DS&A concepts with code implementations and complexity analysis.',
      pages: 89,
      downloads: 2134,
      rating: 4.9,
      thumbnail: 'computer-science-algorithms',
    },
    {
      id: 5,
      title: 'Cell Biology Essentials',
      subject: 'Biology',
      description: 'Cell structure, function, and processes including mitosis, meiosis, and protein synthesis.',
      pages: 38,
      downloads: 756,
      rating: 4.6,
      thumbnail: 'biology-cell-structure',
    },
    {
      id: 6,
      title: 'Business Strategy Framework',
      subject: 'Business',
      description: 'Strategic planning, competitive analysis, and business model development.',
      pages: 72,
      downloads: 534,
      rating: 4.5,
      thumbnail: 'business-strategy-framework',
    },
  ];

  const filteredNotes = notesData.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || note.subject === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">Study Notes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access premium study notes created by top students and educators. Perfect for exam preparation and quick revision.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-full border-2 border-border/20 focus:border-primary/50"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full ${
                  selectedFilter === filter
                    ? 'bg-primary hover:bg-primary/90'
                    : 'border-border/20 hover:border-primary/50'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, index) => (
            <div
              key={note.id}
              className="group glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <BookOpen className="w-12 h-12 text-primary/60" />
                <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {note.subject}
                  </Badge>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <span>★ {note.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                  {note.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {note.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{note.pages} pages</span>
                  <span>{note.downloads} downloads</span>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1 rounded-full bg-primary hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full border-border/20">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">No notes found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;