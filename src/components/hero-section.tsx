
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn(
      "relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-12 md:pt-32 md:pb-24",
      className
    )}>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-blue-800 shadow-sm mb-6">
            <Sparkles size={14} className="mr-1 text-blue-500" />
            <span>Empowering students for quality careers</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-highlight">Discover</span> Your Perfect Career Path
          </h1>
          
          <p className="mb-10 text-xl text-muted-foreground">
            AI-powered guidance to help O-Level students in Rwanda choose the right A-Level subjects
            for their dream careers. Find your path, build your future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 font-medium">
              <Link to="/assessment">
                Start Assessment <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-medium">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute -inset-4 rounded-xl bg-blue-50/50 backdrop-blur-sm border border-blue-100 animate-pulse" />
            <div className="relative glass rounded-xl shadow-md overflow-hidden border border-blue-100">
              <img
                src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students in a classroom"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
