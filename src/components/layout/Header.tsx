import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, CodeXml, X } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/components', label: 'Components' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`;
  
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-foreground'}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Dynamic UI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[320px] bg-background p-0">
                <div className="flex items-center justify-between p-6 border-b">
                    <Link to="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                        <CodeXml className="h-6 w-6 text-primary" />
                        <span className="font-bold text-lg">Dynamic UI</span>
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col gap-6 p-6">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={mobileNavLinkClasses}
                        onClick={() => setIsSheetOpen(false)}
                    >
                        {link.label}
                    </NavLink>
                ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;