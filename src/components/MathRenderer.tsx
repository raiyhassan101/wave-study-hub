import React from 'react';

interface MathRendererProps {
  content: string;
  className?: string;
}

const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  // Function to clean up LaTeX expressions
  const cleanMathExpression = (text: string) => {
    return text
      .replace(/\\\(/g, '')  // Remove \(
      .replace(/\\\)/g, '')  // Remove \)
      .replace(/\\\[/g, '')  // Remove \[
      .replace(/\\\]/g, '')  // Remove \]
      .replace(/\\int/g, '∫')  // Convert \int to ∫
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')  // Convert \frac{a}{b} to a/b
      .replace(/\\times/g, '×')  // Convert \times to ×
      .replace(/\\cdot/g, '·')   // Convert \cdot to ·
      .replace(/\\dx/g, ' dx')   // Convert \dx to dx
      .replace(/\\dy/g, ' dy')   // Convert \dy to dy
      .replace(/\\dt/g, ' dt')   // Convert \dt to dt
      .replace(/\\du/g, ' du')   // Convert \du to du
      .replace(/\\dv/g, ' dv')   // Convert \dv to dv
      .replace(/\{([^}]+)\}/g, '$1')  // Remove braces around single variables
      .replace(/_([a-zA-Z0-9]+)/g, '_{$1}')  // Keep subscripts but clean format
      .replace(/\^([a-zA-Z0-9]+)/g, '^{$1}'); // Keep superscripts but clean format
  };

  // Function to format mathematical expressions
  const formatMathContent = (text: string) => {
    // Split by lines and process each line
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Check if line contains LaTeX math expressions
      const hasMath = line.includes('\\(') || line.includes('\\[') || line.includes('$$');
      
      if (hasMath) {
        // Clean up the math expression
        const cleanedLine = cleanMathExpression(line);
        return (
          <div key={index} className="mb-2">
            <div className="math-block">
              {cleanedLine}
            </div>
          </div>
        );
      }
      
      // Check if line is a heading
      if (line.startsWith('###')) {
        return (
          <h3 key={index} className="text-base font-semibold text-foreground mb-2 mt-2 first:mt-0">
            {line.replace('###', '').trim()}
          </h3>
        );
      }
      
      if (line.startsWith('##')) {
        return (
          <h2 key={index} className="text-lg font-semibold text-foreground mb-2 mt-3 first:mt-0">
            {line.replace('##', '').trim()}
          </h2>
        );
      }
      
      if (line.startsWith('#')) {
        return (
          <h1 key={index} className="text-xl font-bold text-foreground mb-3 mt-4 first:mt-0">
            {line.replace('#', '').trim()}
          </h1>
        );
      }
      
      // Check if line is a list item
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <div key={index} className="flex items-start mb-1">
            <span className="text-primary mr-2">•</span>
            <span className="text-sm text-foreground leading-relaxed">
              {line.replace(/^[-*]\s*/, '')}
            </span>
          </div>
        );
      }
      
      if (line.match(/^\d+\.\s/)) {
        return (
          <div key={index} className="flex items-start mb-1">
            <span className="text-primary mr-2 font-semibold">
              {line.match(/^\d+/)?.[0]}.
            </span>
            <span className="text-sm text-foreground leading-relaxed">
              {line.replace(/^\d+\.\s*/, '')}
            </span>
          </div>
        );
      }
      
      // Regular paragraph
      if (line.trim()) {
        return (
          <p key={index} className="text-sm text-foreground mb-2 leading-relaxed">
            {line}
          </p>
        );
      }
      
      // Empty line
      return <div key={index} className="mb-1"></div>;
    });
  };

  return (
    <div className={`math-content ${className}`}>
      {formatMathContent(content)}
    </div>
  );
};

export default MathRenderer;
