import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import WaveAnimation from './WaveAnimation';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-foreground">Empowering Students, One Lesson At a Time</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-bold text-foreground mb-6 leading-tight">
            Study Smarter with{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gen Z
            </span>
            <br />
            Learning Platform
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Access premium study notes, ace entry tests, build projects, and get AI-powered tutoring. 
            Join thousands of students who are growing with gurus.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/courses">
                Start Learning Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-3 rounded-full border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              asChild
            >
              <Link to="/notes">
                <Play className="mr-2 w-5 h-5" />
                Explore Notes
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-md sm:max-w-2xl mx-auto">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Study Resources</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl sm:text-4xl font-poppins font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Animation */}
      <WaveAnimation />
    </section>
  );
};

export default HeroSection;