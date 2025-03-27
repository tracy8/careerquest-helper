
import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe, Book, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <PageTransition pageName="about" className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                About CareerQuest
              </h1>
              <p className="text-xl text-muted-foreground">
                Our mission is to empower Rwandan youth to discover and pursue fulfilling careers through informed education choices.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In many African communities, including Kigali, a significant number of people work in jobs they are neither skilled in nor passionate about, primarily for financial survival. This results in low productivity, poor service delivery, and economic inefficiencies.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  CareerQuest was created to address this challenge by providing early career guidance to O-Level students before they select their A-Level subjects. By guiding young people early, we help bridge the gap between education and meaningful employment.
                </p>
                <div className="space-y-3">
                  {[
                    "Empower students to make informed career choices",
                    "Reduce the mismatch between education and job requirements",
                    "Increase workforce productivity and job satisfaction",
                    "Support Rwanda's economic growth through skilled professionals"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                        <Check size={14} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-blue-50/30 backdrop-blur-sm border border-blue-100" />
                <div className="relative glass rounded-xl shadow-md overflow-hidden border border-blue-100">
                  <img
                    src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Students in Rwanda"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Approach</h2>
              <p className="text-xl text-muted-foreground">
                What makes CareerQuest's career guidance approach unique and effective
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Book className="text-primary" size={24} />,
                  title: "Early Guidance",
                  description: "We provide career counseling before students choose A-Level subjects, preventing mismatches early."
                },
                {
                  icon: <Users className="text-primary" size={24} />,
                  title: "Inclusive Approach",
                  description: "We involve parents and teachers to help them understand students' strengths, improving support and decision-making."
                },
                {
                  icon: <TrendingUp className="text-primary" size={24} />,
                  title: "Data-Driven",
                  description: "We use research-based methods to match students' abilities with market demands, ensuring better career alignment."
                },
                {
                  icon: <Globe className="text-primary" size={24} />,
                  title: "Long-Term Impact",
                  description: "We aim to create a culture of career awareness, increasing workforce productivity and reducing unemployment."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">The Problem We're Solving</h2>
              <p className="text-xl text-muted-foreground">
                In Rwanda, many O-Level students face challenges in making informed career and subject choices due to a lack of structured guidance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold mb-4 text-red-700">The Challenge</h3>
                <ul className="space-y-3">
                  {[
                    "Most secondary schools don't offer formal career counseling programs",
                    "Students choose A-Level subjects without understanding their strengths or job market demands",
                    "This leads to poor academic performance and dissatisfaction in future careers",
                    "Many young people end up in jobs they neither enjoy nor excel at"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-red-200 text-red-700 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs">!</span>
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <h3 className="text-xl font-bold mb-4 text-amber-700">The Impact</h3>
                <ul className="space-y-3">
                  {[
                    "High rates of job dissatisfaction and career changes",
                    "Skill mismatches in Rwanda's labor market",
                    "Lower productivity in various sectors",
                    "Economic inefficiencies due to unsuitable career choices",
                    "Wasted educational resources when students pursue wrong paths"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-amber-200 text-amber-700 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs">→</span>
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-green-700">Our Solution</h3>
                <ul className="space-y-3">
                  {[
                    "AI-powered career assessments that match students' interests and abilities",
                    "Data-driven subject recommendations aligned with career goals",
                    "Involvement of parents and teachers in the guidance process",
                    "Real-world career insights integrated with educational planning",
                    "Continuous support throughout the decision-making process"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-green-200 text-green-700 flex items-center justify-center mr-3 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Mission</h2>
              <p className="text-xl text-white/80 mb-8">
                Be part of transforming education and career development in Rwanda. Start your journey with CareerQuest today.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 font-medium">
                <Link to="/assessment">
                  Begin Your Assessment <ArrowRight size={16} className="ml-2" />
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

export default About;
