import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Target, Clock, Users, Play, BookOpen, Award } from 'lucide-react';

const TestPrep = () => {
  const [selectedTest, setSelectedTest] = useState('ECAT');

  const testTypes = [
    { id: 'ECAT', name: 'ECAT', description: 'Engineering College Admission Test' },
    { id: 'MCAT', name: 'MCAT', description: 'Medical College Admission Test' },
    { id: 'GAT', name: 'GAT', description: 'Graduate Assessment Test' },
    { id: 'SAT', name: 'SAT', description: 'Scholastic Assessment Test' },
  ];

  const mockTests = [
    {
      id: 1,
      title: 'ECAT Mathematics Mock Test #1',
      questions: 50,
      duration: 90,
      difficulty: 'Medium',
      attempts: 1234,
      avgScore: 85,
      yourBest: 78,
    },
    {
      id: 2,
      title: 'ECAT Physics Mock Test #1',
      questions: 40,
      duration: 75,
      difficulty: 'Hard',
      attempts: 892,
      avgScore: 72,
      yourBest: null,
    },
    {
      id: 3,
      title: 'ECAT Chemistry Mock Test #1',
      questions: 45,
      duration: 80,
      difficulty: 'Medium',
      attempts: 1056,
      avgScore: 79,
      yourBest: 82,
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Ahmed Khan', score: 95, tests: 12 },
    { rank: 2, name: 'Fatima Ali', score: 92, tests: 15 },
    { rank: 3, name: 'Hassan Sheikh', score: 90, tests: 8 },
    { rank: 4, name: 'Aisha Malik', score: 88, tests: 10 },
    { rank: 5, name: 'You', score: 78, tests: 3 },
  ];

  const studyPlan = [
    { week: 1, topic: 'Algebra & Functions', progress: 100, status: 'completed' },
    { week: 2, topic: 'Geometry & Trigonometry', progress: 100, status: 'completed' },
    { week: 3, topic: 'Calculus Basics', progress: 75, status: 'current' },
    { week: 4, topic: 'Mechanics & Motion', progress: 0, status: 'upcoming' },
    { week: 5, topic: 'Electricity & Magnetism', progress: 0, status: 'upcoming' },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">Entry Test Preparation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ace your entry tests with our comprehensive preparation platform. Practice with real-time mock tests and track your progress.
          </p>
        </div>

        {/* Test Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {testTypes.map((test) => (
            <Button
              key={test.id}
              variant={selectedTest === test.id ? 'default' : 'outline'}
              onClick={() => setSelectedTest(test.id)}
              className={`rounded-full ${
                selectedTest === test.id
                  ? 'bg-primary hover:bg-primary/90'
                  : 'border-border/20 hover:border-primary/50'
              }`}
            >
              {test.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-poppins font-semibold text-foreground">Your Progress</h2>
                <Badge className="bg-accent text-accent-foreground">Level 3</Badge>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-primary mb-2">78%</div>
                  <div className="text-sm text-muted-foreground">Average Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-accent mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Tests Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-secondary mb-2">24</div>
                  <div className="text-sm text-muted-foreground">Study Hours</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="h-3" />
              </div>
            </Card>

            {/* Mock Tests */}
            <Card className="glass-card p-6">
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-6">Mock Tests</h2>
              
              <div className="space-y-4">
                {mockTests.map((test, index) => (
                  <div
                    key={test.id}
                    className="border border-border/20 rounded-xl p-4 hover:border-primary/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-poppins font-semibold text-foreground mb-1">{test.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {test.questions} questions
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {test.duration} min
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {test.attempts} attempts
                          </span>
                        </div>
                      </div>
                      <Badge variant={test.difficulty === 'Hard' ? 'destructive' : 'secondary'}>
                        {test.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <span>Avg: {test.avgScore}%</span>
                        {test.yourBest && <span className="text-primary">Your Best: {test.yourBest}%</span>}
                      </div>
                      <Button size="sm" className="rounded-full">
                        <Play className="w-4 h-4 mr-2" />
                        Start Test
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Study Plan */}
            <Card className="glass-card p-6">
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-6">8-Week Study Plan</h2>
              
              <div className="space-y-4">
                {studyPlan.map((week, index) => (
                  <div
                    key={week.week}
                    className={`border rounded-xl p-4 transition-all animate-fade-in ${
                      week.status === 'current'
                        ? 'border-primary/50 bg-primary/5'
                        : week.status === 'completed'
                        ? 'border-accent/50 bg-accent/5'
                        : 'border-border/20'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          week.status === 'completed'
                            ? 'bg-accent text-accent-foreground'
                            : week.status === 'current'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {week.status === 'completed' ? '✓' : week.week}
                        </div>
                        <span className="font-medium text-foreground">{week.topic}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Week {week.week}</span>
                    </div>
                    
                    <div className="ml-11">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{week.progress}%</span>
                      </div>
                      <Progress value={week.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-poppins font-semibold text-foreground">Leaderboard</h2>
              </div>
              
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors animate-fade-in ${
                      user.name === 'You' ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/50'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank === 1
                          ? 'bg-yellow-500 text-white'
                          : user.rank === 2
                          ? 'bg-gray-400 text-white'
                          : user.rank === 3
                          ? 'bg-orange-600 text-white'
                          : user.name === 'You'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {user.rank}
                      </div>
                      <div>
                        <div className={`font-medium ${user.name === 'You' ? 'text-primary' : 'text-foreground'}`}>
                          {user.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{user.tests} tests</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">{user.score}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-poppins font-semibold text-foreground mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <Button className="w-full justify-start rounded-full bg-primary hover:bg-primary/90">
                  <Target className="w-4 h-4 mr-2" />
                  Take Practice Test
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-full border-border/20">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Study Materials
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-full border-border/20">
                  <Award className="w-4 h-4 mr-2" />
                  View Certificates
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPrep;