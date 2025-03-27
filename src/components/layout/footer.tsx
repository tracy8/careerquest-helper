
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-display font-bold">CareerQuest</h3>
            <p className="text-muted-foreground text-sm">
              Empowering O-Level students in Rwanda to make informed career choices through AI-driven guidance and personalized recommendations.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-muted-foreground hover:text-foreground transition-colors">
                  Assessment
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Career Paths
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Subject Combinations
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Email: info@careerquest.rw
              </li>
              <li className="text-muted-foreground">
                Phone: +250 788 123 456
              </li>
              <li className="text-muted-foreground">
                Address: Kigali, Rwanda
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CareerQuest. All rights reserved.</p>
          <p className="mt-2">
            Developed to empower youth for quality careers in Rwanda.
          </p>
        </div>
      </div>
    </footer>
  );
};
