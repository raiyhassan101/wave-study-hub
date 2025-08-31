import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  gradient?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  gradient = false,
}) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 rounded-2xl blur group-hover:opacity-40 transition duration-300" />
      <div className="relative glass-card rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
          gradient 
            ? 'bg-gradient-to-br from-primary to-accent' 
            : 'bg-primary'
        } group-hover:animate-float`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-poppins font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start p-0 h-auto font-medium text-primary hover:text-primary hover:bg-transparent group-hover:translate-x-2 transition-transform duration-200"
          asChild
        >
          <Link to={link}>
            Explore {title} →
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;