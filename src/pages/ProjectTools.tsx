import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Download, Lightbulb, FileSpreadsheet, Presentation, Code, Palette, Zap } from 'lucide-react';

const ProjectTools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tools', icon: Zap },
    { id: 'excel', label: 'Excel Templates', icon: FileSpreadsheet },
    { id: 'powerpoint', label: 'PowerPoint', icon: Presentation },
    { id: 'ideas', label: 'Project Ideas', icon: Lightbulb },
    { id: 'code', label: 'Code Templates', icon: Code },
  ];

  const tools = [
    {
      id: 1,
      title: 'Financial Dashboard Template',
      category: 'excel',
      description: 'Complete Excel dashboard for financial analysis with charts, KPIs, and automated calculations.',
      downloads: 2340,
      rating: 4.9,
      type: 'Excel Template',
      size: '2.5 MB',
      thumbnail: 'financial-dashboard',
    },
    {
      id: 2,
      title: 'Student Grade Tracker',
      category: 'excel',
      description: 'Track student performance, calculate GPA, and generate progress reports automatically.',
      downloads: 1870,
      rating: 4.8,
      type: 'Excel Template',
      size: '1.2 MB',
      thumbnail: 'grade-tracker',
    },
    {
      id: 3,
      title: 'Modern Presentation Template',
      category: 'powerpoint',
      description: 'Clean, professional PowerPoint template perfect for academic and business presentations.',
      downloads: 3240,
      rating: 4.7,
      type: 'PowerPoint Template',
      size: '8.5 MB',
      thumbnail: 'presentation-template',
    },
    {
      id: 4,
      title: 'Data Science Project Ideas',
      category: 'ideas',
      description: 'Collection of 50+ data science project ideas with implementation guides and datasets.',
      downloads: 1650,
      rating: 4.9,
      type: 'PDF Guide',
      size: '3.2 MB',
      thumbnail: 'data-science-ideas',
    },
    {
      id: 5,
      title: 'Web Development Starter Kit',
      category: 'code',
      description: 'Complete HTML/CSS/JS starter template with modern design and responsive layout.',
      downloads: 2890,
      rating: 4.8,
      type: 'Code Template',
      size: '5.8 MB',
      thumbnail: 'web-dev-kit',
    },
    {
      id: 6,
      title: 'Budget Planner & Tracker',
      category: 'excel',
      description: 'Personal and business budget planner with expense tracking and financial forecasting.',
      downloads: 2100,
      rating: 4.6,
      type: 'Excel Template',
      size: '1.8 MB',
      thumbnail: 'budget-planner',
    },
  ];

  const aiIdeas = [
    'E-commerce Analytics Dashboard',
    'Student Performance Prediction System',
    'Social Media Sentiment Analysis Tool',
    'IoT Smart Home Controller',
    'Blockchain Voting System',
    'AI-Powered Recipe Recommender',
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">Project Tools & Ideas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boost your productivity with professional templates and get inspired with innovative project ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Idea Generator */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="w-6 h-6 text-primary animate-glow" />
                <h2 className="text-xl font-poppins font-semibold text-foreground">AI Idea Generator</h2>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                Get personalized project ideas based on your interests and skill level.
              </p>
              
              <Button className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                <Zap className="w-4 h-4 mr-2" />
                Generate Ideas
              </Button>
              
              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium text-foreground">Trending Ideas:</h3>
                {aiIdeas.slice(0, 3).map((idea, index) => (
                  <div
                    key={index}
                    className="text-xs text-muted-foreground p-2 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  >
                    {idea}
                  </div>
                ))}
              </div>
            </Card>

            {/* Categories */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-poppins font-semibold text-foreground mb-4">Categories</h2>
              
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full justify-start rounded-lg ${
                        selectedCategory === category.id
                          ? 'bg-primary hover:bg-primary/90'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {category.label}
                    </Button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tools and templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-2 border-border/20 focus:border-primary/50"
              />
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <Card
                  key={tool.id}
                  className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Thumbnail */}
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center group relative overflow-hidden">
                    {tool.category === 'excel' ? (
                      <FileSpreadsheet className="w-12 h-12 text-primary/60" />
                    ) : tool.category === 'powerpoint' ? (
                      <Presentation className="w-12 h-12 text-primary/60" />
                    ) : tool.category === 'code' ? (
                      <Code className="w-12 h-12 text-primary/60" />
                    ) : (
                      <Lightbulb className="w-12 h-12 text-primary/60" />
                    )}
                    
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Download className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {tool.type}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <span>★ {tool.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-poppins font-semibold text-foreground leading-tight">
                      {tool.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{tool.downloads.toLocaleString()} downloads</span>
                      <span>{tool.size}</span>
                    </div>

                    <Button size="sm" className="w-full rounded-full bg-primary hover:bg-primary/90">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <Palette className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">No tools found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              </div>
            )}

            {/* Feature Banner */}
            {selectedCategory === 'all' && (
              <Card className="glass-card p-8 text-center">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
                  Need Custom Templates?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Request custom Excel templates, PowerPoint designs, or project blueprints tailored to your specific needs.
                </p>
                <Button size="lg" className="rounded-full bg-gradient-to-r from-accent to-primary hover:shadow-lg">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Request Custom Tool
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTools;