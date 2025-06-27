import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CodeXml, Github, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Dynamic UI. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#top" onClick={handleScrollToTop} className="text-muted-foreground hover:text-primary transition-colors">
                <ArrowUp className="h-5 w-5" />
                <span className="sr-only">Back to top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;