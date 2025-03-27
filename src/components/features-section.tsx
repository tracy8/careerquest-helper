
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, Users, BarChart2, Compass, Shield } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <Card className="border-2 border-transparent hover:border-blue-100 transition-all duration-300 h-full">
    <CardHeader>
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="text-primary" size={24} />,
      title: "AI-Powered Assessment",
      description: "Our intelligent system analyzes your interests, strengths, and personality to identify your ideal career path."
    },
    {
      icon: <BookOpen className="text-primary" size={24} />,
      title: "Subject Recommendations",
      description: "Get personalized A-Level subject combination suggestions based on your assessment results and career goals."
    },
    {
      icon: <Compass className="text-primary" size={24} />,
      title: "Career Exploration",
      description: "Discover detailed information about different careers, including job prospects, required skills, and educational paths."
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Parent & Teacher Insights",
      description: "Share assessment results with parents and teachers to get additional guidance and support."
    },
    {
      icon: <BarChart2 className="text-primary" size={24} />,
      title: "Job Market Analysis",
      description: "Access real-time data on career opportunities and job market trends in Rwanda and globally."
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Data-Driven Decisions",
      description: "Make informed choices about your education and career based on accurate, personalized information."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Features That Empower Your Journey</h2>
          <p className="text-xl text-muted-foreground">
            Our comprehensive platform offers everything you need to make informed career decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
