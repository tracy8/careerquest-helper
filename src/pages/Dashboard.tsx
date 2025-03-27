
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/page-transition";
import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user-context";
import { studentDashboardItems } from "@/data/dashboard-items";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  const { user, isAuthenticated } = useUser();
  const navigate = useNavigate();
  
  // Enhanced loading state for a smoother transition
  const [isLoading, setIsLoading] = useState(true);
  
  React.useEffect(() => {
    // Simulate loading time for smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-40 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-60 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }
  
  return (
    <PageTransition pageName="dashboard" className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container px-4 md:px-6 py-12 md:py-20">
          {isAuthenticated ? (
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                  <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome, {user?.name}</h1>
                  <p className="text-xl text-muted-foreground">
                    Track your progress and continue your career discovery journey.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {studentDashboardItems.map((item, index) => (
                    <DashboardCard
                      key={index}
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      link={item.link}
                      complete={item.complete}
                      progress={item.progress}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col animate-fade-in">
                  <h1 className="text-4xl font-bold tracking-tight mb-6">Get Started with CareerQuest</h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Sign in to access your personalized career guidance dashboard or take our assessment as a guest.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Discover your ideal career path based on your interests and strengths",
                      "Get personalized A-Level subject recommendations",
                      "Explore detailed information about different careers",
                      "Track your progress and refine your choices"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
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
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => navigate('/assessment')} 
                    className="w-full md:w-auto"
                  >
                    Continue as Guest <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                
                <div className="animate-scale-in">
                  <LoginForm />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Dashboard;
