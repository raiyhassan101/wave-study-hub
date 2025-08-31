import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Users, Target, Zap, Heart, Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'GrowWithGurus was founded in Peshawar with a vision to democratize quality education.',
    },
    {
      year: '2021',
      title: 'First 1K Students',
      description: 'Reached our first milestone of 1,000 active students across Pakistan.',
    },
    {
      year: '2022',
      title: 'Platform Expansion',
      description: 'Launched comprehensive study materials and interactive learning tools.',
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Introduced AI-powered tutoring and personalized learning experiences.',
    },
    {
      year: '2024',
      title: 'Global Vision',
      description: 'Expanding internationally while maintaining our commitment to affordable education.',
    },
  ];

  const values = [
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Everything we do is designed with students\' success and learning outcomes in mind.',
    },
    {
      icon: Target,
      title: 'Quality First',
      description: 'We maintain the highest standards in educational content and learning experiences.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly evolving with technology to provide cutting-edge learning solutions.',
    },
    {
      icon: Heart,
      title: 'Accessibility',
      description: 'Making quality education affordable and accessible to students everywhere.',
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-4">About GrowWithGurus</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering students, one lesson at a time. We're on a mission to make quality education 
            accessible, affordable, and engaging for everyone.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To revolutionize education by providing high-quality, affordable learning resources 
              that empower students to achieve their academic goals and unlock their full potential.
            </p>
          </Card>
          
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become the world's most trusted educational platform, bridging the gap between 
              traditional learning and modern technology while making education accessible to all.
            </p>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to educational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="glass-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small startup in Peshawar to empowering thousands of students worldwide.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-0.5"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center animate-slide-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background transform md:-translate-x-1.5 z-10"></div>
                  
                  {/* Content */}
                  <div className={`glass-card p-6 ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="text-2xl font-poppins font-bold text-primary mb-2">{item.year}</div>
                    <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">support@growwithgurus.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+92 XXX XXXXXXX</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">Send us a Message</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input placeholder="Your name" className="rounded-lg border-2 border-border/20 focus:border-primary/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="rounded-lg border-2 border-border/20 focus:border-primary/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input placeholder="How can we help?" className="rounded-lg border-2 border-border/20 focus:border-primary/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={4}
                  className="rounded-lg border-2 border-border/20 focus:border-primary/50"
                />
              </div>
              
              <Button size="lg" className="w-full rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;