import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PlayCircle, Clock, Users, Star, BookOpen, CheckCircle } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Complete Mathematics for Engineering',
      instructor: 'Dr. Ahmad Hassan',
      duration: '48 hours',
      students: 2340,
      rating: 4.9,
      price: 'Rs. 4,800',
      originalPrice: 'Rs. 6,200',
      discount: 22,
      level: 'Intermediate',
      category: 'mathematics',
      description: 'Master calculus, algebra, and advanced mathematics concepts essential for engineering.',
      lessons: 156,
      progress: 0,
      enrolled: false,
      thumbnail: 'mathematics-course',
    },
    {
      id: 2,
      title: 'Physics Mechanics & Dynamics',
      instructor: 'Prof. Sarah Khan',
      duration: '32 hours',
      students: 1870,
      rating: 4.8,
      price: 'Rs. 3,500',
      originalPrice: 'Rs. 4,500',
      discount: 18,
      level: 'Beginner',
      category: 'physics',
      description: 'Understand motion, forces, energy, and momentum with practical applications.',
      lessons: 98,
      progress: 65,
      enrolled: true,
      thumbnail: 'physics-course',
    },
    {
      id: 3,
      title: 'Organic Chemistry Mastery',
      instructor: 'Dr. Fatima Ali',
      duration: '40 hours',
      students: 1650,
      rating: 4.7,
      price: 'Rs. 4,200',
      originalPrice: 'Rs. 5,000',
      discount: 16,
      level: 'Advanced',
      category: 'chemistry',
      description: 'Deep dive into organic reactions, mechanisms, and synthesis strategies.',
      lessons: 124,
      progress: 0,
      enrolled: false,
      thumbnail: 'chemistry-course',
    },
    {
      id: 4,
      title: 'Data Structures & Algorithms',
      instructor: 'Eng. Hassan Sheikh',
      duration: '60 hours',
      students: 3240,
      rating: 4.9,
      price: 'Rs. 5,500',
      originalPrice: 'Rs. 7,000',
      discount: 21,
      level: 'Intermediate',
      category: 'computer-science',
      description: 'Learn essential programming concepts with hands-on coding practice.',
      lessons: 180,
      progress: 25,
      enrolled: true,
      thumbnail: 'programming-course',
    },
  ];

  const filteredCourses = courses.filter(course => {
    if (activeTab === 'all') return true;
    if (activeTab === 'enrolled') return course.enrolled;
    if (activeTab === 'completed') return course.progress === 100;
    return course.category === activeTab;
  });

  const tabs = [
    { id: 'all', label: 'All Courses' },
    { id: 'enrolled', label: 'My Courses' },
    { id: 'mathematics', label: 'Mathematics' },
    { id: 'physics', label: 'Physics' },
    { id: 'chemistry', label: 'Chemistry' },
    { id: 'computer-science', label: 'Computer Science' },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">Courses</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from expert instructors with comprehensive courses designed for academic excellence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full ${
                activeTab === tab.id
                  ? 'bg-primary hover:bg-primary/90'
                  : 'border-border/20 hover:border-primary/50'
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Card
              key={course.id}
              className="glass-card p-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary/60" />
                {course.enrolled && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      Enrolled
                    </Badge>
                  </div>
                )}
                {course.discount > 0 && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive">
                      {course.discount}% OFF
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>

              <div className="p-6">
                {/* Course Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {course.level}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-poppins font-semibold text-foreground leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    by {course.instructor}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {course.lessons} lessons
                    </span>
                  </div>

                  {/* Progress Bar for enrolled courses */}
                  {course.enrolled && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-border/20">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-poppins font-bold text-primary">
                      {course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>

                  {course.enrolled ? (
                    <Button size="sm" className="rounded-full bg-accent hover:bg-accent/90">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Continue
                    </Button>
                  ) : (
                    <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90">
                      Enroll Now
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground">Try selecting a different category</p>
          </div>
        )}

        {/* Featured Section */}
        {activeTab === 'all' && (
          <div className="mt-16 glass-card rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students who are already succeeding with our expert-led courses.
            </p>
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25">
              <CheckCircle className="w-5 h-5 mr-2" />
              Explore All Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;