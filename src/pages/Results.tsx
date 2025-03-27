import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CareerPathCard } from "@/components/results/career-path-card";
import { CareerDetailDialog } from "@/components/career-detail-dialog";
import { careerPaths, CareerPath } from "@/data/career-paths";
import { useToast } from "@/hooks/use-toast";
import { Download, ArrowLeft, Share2 } from "lucide-react";
import { useUser } from "@/context/user-context";

interface Assessment {
  answers: Record<string, string>;
  progress: number;
  scores: Record<string, number>;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useUser();
  
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [matchedCareers, setMatchedCareers] = useState<Array<{ career: CareerPath; score: number }>>([]);
  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Get assessment data from location state or localStorage
    const assessmentData = location.state?.assessment || 
                          JSON.parse(localStorage.getItem('careerquest_assessment') || 'null');
    
    if (!assessmentData) {
      toast({
        title: "No assessment data found",
        description: "Please complete the assessment first.",
        variant: "destructive",
      });
      navigate('/assessment');
      return;
    }
    
    setAssessment(assessmentData);
    
    // Calculate career matches based on assessment scores
    const calculateMatches = () => {
      // Simulate loading for smoother experience
      setTimeout(() => {
        if (assessmentData.scores) {
          // Calculate the total possible score across all categories
          const maxPossibleScore = Object.values(assessmentData.scores).reduce((a, b) => Number(a) + Number(b), 0);
          
          // Calculate match score for each career path
          const matches = careerPaths.map(career => {
            // The score is weighted based on the career's category
            let score = 0;
            
            if (career.category === 'STEM') {
              score = (Number(assessmentData.scores.STEM) * 2) + Number(assessmentData.scores.CBA);
            } else if (career.category === 'HMS') {
              score = (Number(assessmentData.scores.HMS) * 2) + Number(assessmentData.scores.CAS);
            } else if (career.category === 'CBA') {
              score = (Number(assessmentData.scores.CBA) * 2) + Number(assessmentData.scores.STEM);
            } else if (career.category === 'CAS') {
              score = (Number(assessmentData.scores.CAS) * 2) + Number(assessmentData.scores.HMS);
            } else if (career.category === 'HSW') {
              score = (Number(assessmentData.scores.HSW) * 2) + Number(assessmentData.scores.STEM);
            }
            
            // Convert to percentage match
            const percentMatch = Math.round((score / (Number(maxPossibleScore) * 0.6)) * 100);
            
            return {
              career,
              score: Math.min(percentMatch, 100) // Cap at 100%
            };
          });
          
          // Sort by match score (highest first)
          const sortedMatches = matches.sort((a, b) => b.score - a.score);
          setMatchedCareers(sortedMatches);
          setIsLoading(false);
        }
      }, 800);
    };
    
    calculateMatches();
  }, [location.state, navigate, toast]);
  
  const handleCareerClick = (career: CareerPath) => {
    setSelectedCareer(career);
    setIsDialogOpen(true);
  };
  
  const handleDownloadResults = () => {
    const matchesText = matchedCareers
      .map((match, index) => `${index + 1}. ${match.career.title} (${match.score}% match)`)
      .join('\n');
    
    const text = `CareerQuest Assessment Results\n\n${
      user ? `Name: ${user.name}\n` : ''
    }Date: ${new Date().toLocaleDateString()}\n\nTop Career Matches:\n${matchesText}`;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CareerQuest-Results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Results Downloaded",
      description: "Your assessment results have been saved to your device.",
    });
  };
  
  // const handleShareResults = () => {
  //   if (navigator.share) {
  //     navigator.share({
  //       title: 'My CareerQuest Results',
  //       text: `I just completed my career assessment on CareerQuest! My top match is ${matchedCareers[0]?.career.title} with a ${matchedCareers[0]?.score}% match.`,
  //       url: window.location.href,
  //     })
  //     .catch((error) => console.log('Sharing failed', error));
  //   } else {
  //     navigator.clipboard.writeText(window.location.href);
  //     toast({
  //       title: "Link Copied",
  //       description: "Results link copied to clipboard.",
  //     });
  //   }
  // };
  
  if (isLoading) {
    return (
      <PageTransition pageName="results" className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
            <h2 className="text-2xl font-bold">Analyzing your responses...</h2>
            <p className="text-muted-foreground">We're matching your profile with potential career paths.</p>
          </div>
        </main>
        <Footer />
      </PageTransition>
    );
  }
  
  return (
    <PageTransition pageName="results" className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container px-4 md:px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-6"
              >
                <ArrowLeft size={16} className="mr-2" /> Back
              </Button>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight mb-4">Your Career Matches</h1>
                  <p className="text-xl text-muted-foreground">
                    Based on your assessment, here are the career paths that best match your profile.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" onClick={handleDownloadResults}>
                    <Download size={16} className="mr-2" /> Save Results
                  </Button>
                  {/* <Button variant="outline" onClick={handleShareResults}>
                    <Share2 size={16} className="mr-2" /> Share
                  </Button> */}
                </div>
              </div>
              
              {/* {assessment && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {Object.entries(assessment.scores).map(([category, score]) => {
                    const maxScore = 15; // Assuming max score per category
                    const percentage = Math.min(Math.round((Number(score) / maxScore) * 100), 100);
                    
                    return (
                      <div key={category} className="p-4 border rounded-lg bg-white">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{category}</span>
                          <span>{percentage}%</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              )} */}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {matchedCareers.map((match, index) => (
                <CareerPathCard
                  key={match.career.id}
                  careerPath={match.career}
                  matchScore={match.score}
                  onClick={handleCareerClick}
                  rank={index + 1}
                />
              ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What's Next?</h3>
              <p className="text-muted-foreground mb-4">
                Click on any career card to learn more about the career path, including required subjects, skills, and job outlook. 
                Share your results with your parents and teachers to discuss your options further.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="/assessment">Retake Assessment</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/dashboard">Back to Dashboard</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <CareerDetailDialog
        career={selectedCareer}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      
      <Footer />
    </PageTransition>
  );
};

export default Results;

