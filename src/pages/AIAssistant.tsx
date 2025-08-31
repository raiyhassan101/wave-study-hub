import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Sparkles, BookOpen, Calculator, Code, MessageCircle } from 'lucide-react';

const AIAssistant = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Hi! I'm your AI study assistant. I can help you with math problems, explain concepts, review your code, or answer any academic questions. What would you like to learn today?",
      timestamp: new Date(),
    },
  ]);

  const quickActions = [
    { icon: Calculator, label: 'Solve Math Problem', prompt: 'Help me solve this math problem:' },
    { icon: BookOpen, label: 'Explain Concept', prompt: 'Can you explain this concept:' },
    { icon: Code, label: 'Review Code', prompt: 'Please review my code:' },
    { icon: MessageCircle, label: 'Study Tips', prompt: 'Give me study tips for:' },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'assistant',
        content: "I'd be happy to help you with that! Could you provide more details so I can give you the most accurate and helpful response?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickAction = (prompt: string) => {
    setMessage(prompt + ' ');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">AI Study Assistant</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant help with your studies. Ask questions, solve problems, and learn concepts with AI-powered assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Features */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary animate-glow" />
                <h2 className="text-xl font-poppins font-semibold text-foreground">AI Capabilities</h2>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <Calculator className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Math Solver</div>
                    <div className="text-muted-foreground">Solve equations, calculus, statistics</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <BookOpen className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Concept Explainer</div>
                    <div className="text-muted-foreground">Break down complex topics</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Code className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Code Helper</div>
                    <div className="text-muted-foreground">Debug, review, and optimize code</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <MessageCircle className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Study Coach</div>
                    <div className="text-muted-foreground">Tips, strategies, and guidance</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-poppins font-semibold text-foreground mb-4">Quick Actions</h2>
              
              <div className="space-y-2">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuickAction(action.prompt)}
                      className="w-full justify-start rounded-lg hover:bg-primary/10 hover:text-primary animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {action.label}
                    </Button>
                  );
                })}
              </div>
            </Card>

            {/* Usage Stats */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-poppins font-semibold text-foreground mb-4">Today's Usage</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Questions Asked</span>
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Problems Solved</span>
                  <Badge variant="secondary">8</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Concepts Explained</span>
                  <Badge variant="secondary">5</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="glass-card h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center space-x-3 p-6 border-b border-border/20">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">AI Study Assistant</h3>
                  <p className="text-sm text-muted-foreground">Online - Ready to help</p>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-glow"></div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start space-x-3 animate-fade-in ${
                      msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.type === 'user'
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-gradient-to-br from-primary to-accent text-white'
                    }`}>
                      {msg.type === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    
                    <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                      msg.type === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      <div className={`inline-block p-3 rounded-2xl ${
                        msg.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {msg.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-6 border-t border-border/20">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything about your studies..."
                    className="flex-1 rounded-full border-2 border-border/20 focus:border-primary/50"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="rounded-full bg-primary hover:bg-primary/90 px-6"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  AI responses are for educational purposes. Always verify important information.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;