
import React from "react";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/page-transition";

const Home = () => {
  return (
    <PageTransition pageName="home" className="min-h-screen flex flex-col">
      <Header transparent />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeaturesSection />
        
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Why Early Career Guidance Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Many students in Rwanda choose A-Level subjects without a clear understanding of how they connect to future careers, leading to mismatched skills and unfulfilling jobs.
                </p>
                <ul className="space-y-4">
                  {[
                    "70% of students make better subject choices when they receive proper career guidance.",
                    "Students with career clarity are 3x more likely to succeed academically.",
                    "Early guidance reduces career mismatches by over 50%.",
                    "Informed decisions lead to higher job satisfaction and productivity."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-blue-50/50 backdrop-blur-sm border border-blue-100" />
                <div className="relative glass rounded-xl shadow-md overflow-hidden border border-blue-100">
                  <img
                    src="https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Students discussing career options"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Find Your Career Path?</h2>
              <p className="text-xl text-white/80 mb-8">
                Take the first step toward a fulfilling future by discovering your strengths, interests, and ideal career.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 font-medium">
                <Link to="/assessment">
                  Start Your Assessment <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Home;
