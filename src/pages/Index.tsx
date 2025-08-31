import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import { BookOpen, Target, Briefcase, Bot, Sparkles, TrendingUp } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Study Notes',
      description: 'Access curated study notes, summaries, and resources for all subjects. Perfect for quick revision and exam prep.',
      link: '/notes',
      gradient: true,
    },
    {
      icon: Target,
      title: 'Entry Test Prep',
      description: 'Ace your entry tests with practice questions, mock tests, and comprehensive preparation materials.',
      link: '/test-prep',
    },
    {
      icon: Briefcase,
      title: 'Project Tools',
      description: 'Excel templates, PowerPoint designs, and project ideas to boost your academic and professional work.',
      link: '/project-tools',
    },
    {
      icon: Bot,
      title: 'AI Tutor',
      description: 'Get instant help with your studies from our AI-powered tutor. Available 24/7 for all your questions.',
      link: '/ai-assistant',
      gradient: true,
    },
  ];

  const trendingTopics = [
    'Mathematics Calculus',
    'Physics Mechanics',
    'Chemistry Organic',
    'Biology Genetics',
    'Computer Science',
    'Business Studies',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Trending Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Trending Now</span>
            </div>
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">Popular Study Topics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what thousands of students are learning right now
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {trendingTopics.map((topic, index) => (
              <div
                key={topic}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm font-medium text-foreground">Everything You Need</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-4">
              Your Complete Learning Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From study notes to AI tutoring, we've got everything you need to excel in your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
