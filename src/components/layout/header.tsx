
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUser } from "@/context/user-context";

interface HeaderProps {
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useUser();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const headerClassName = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
    {
      "bg-transparent": transparent && !scrolled,
      "bg-white/80 backdrop-blur-md shadow-sm": !transparent || scrolled,
      "shadow-md": scrolled
    }
  );

  const linkClassName = (path: string) => cn(
    "text-sm font-medium transition-colors duration-300",
    {
      "text-foreground/90 hover:text-foreground": !transparent || scrolled,
      "text-white/90 hover:text-white": transparent && !scrolled,
      "text-primary font-semibold": location.pathname === path
    }
  );

  const mobileMenuClassName = cn(
    "fixed inset-0 z-50 bg-background flex flex-col transition-transform duration-300 ease-in-out",
    {
      "translate-x-0": isMenuOpen,
      "translate-x-full": !isMenuOpen
    }
  );

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  if (isAuthenticated) {
    navLinks.push({ label: "Dashboard", path: "/dashboard" });
  }

  return (
    <header className={headerClassName}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link 
          to="/" 
          className={cn(
            "text-lg md:text-xl font-display font-bold tracking-tight transition-colors duration-300",
            {
              "text-foreground": !transparent || scrolled,
              "text-white": transparent && !scrolled
            }
          )}
        >
          CareerQuest
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={linkClassName(link.path)}
            >
              {link.label}
            </Link>
          ))}

          {isAuthenticated ? (
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-full transition-colors duration-300",
            {
              "text-foreground hover:bg-muted": !transparent || scrolled,
              "text-white hover:bg-white/10": transparent && !scrolled
            }
          )}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={mobileMenuClassName}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/" className="text-xl font-display font-bold" onClick={() => setIsMenuOpen(false)}>
            CareerQuest
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-foreground py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {isAuthenticated ? (
            <Button variant="outline" onClick={() => { logout(); setIsMenuOpen(false); }}>
              Logout
            </Button>
          ) : (
            <Button asChild className="mt-4">
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};
