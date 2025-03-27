
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/page-transition";
import { Progress } from "@/components/ui/progress";
import { QuestionCard } from "@/components/assessment/question-card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { assessmentQuestions, Question } from "@/data/assessment-questions";
import { useUser } from "@/context/user-context";

interface Assessment {
  answers: Record<string, string>;
  progress: number;
  scores: Record<string, number>;
}

const initialAssessment: Assessment = {
  answers: {},
  progress: 0,
  scores: {
    STEM: 0,
    HMS: 0,
    CBA: 0,
    CAS: 0,
    HSW: 0
  }
};

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [assessment, setAssessment] = useState<Assessment>(initialAssessment);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, setUser } = useUser();
  
  const totalQuestions = assessmentQuestions.length;
  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const progress = Math.round((Object.keys(assessment.answers).length / totalQuestions) * 100);
  
  const handleAnswer = (optionId: string) => {
    const updatedAnswers = { ...assessment.answers, [currentQuestion.id]: optionId };
    const progress = (Object.keys(updatedAnswers).length / totalQuestions) * 100;
    
    // Calculate scores
    const selectedOption = currentQuestion.options.find(option => option.id === optionId);
    const updatedScores = { ...assessment.scores };
    
    if (selectedOption) {
      Object.entries(selectedOption.score).forEach(([category, score]) => {
        updatedScores[category] = (updatedScores[category] || 0) + score;
      });
    }
    
    setAssessment({
      answers: updatedAnswers,
      progress,
      scores: updatedScores
    });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setIsComplete(true);
      
      // Update user progress if logged in
      if (user) {
        setUser({
          ...user,
          assessmentProgress: 100,
          completedAssessments: [...(user.completedAssessments || []), 'career-assessment']
        });
      }
      
      // Save assessment results to localStorage
      localStorage.setItem('careerquest_assessment', JSON.stringify(assessment));
      
      // Show completion toast
      toast({
        title: "Assessment Complete!",
        description: "Your results are ready to view.",
      });
      
      // Navigate to results page
      navigate('/results', { state: { assessment } });
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  
  // Update user progress as they complete questions
  useEffect(() => {
    if (user && progress > 0) {
      setUser({
        ...user,
        assessmentProgress: progress
      });
    }
  }, [progress, user, setUser]);
  
  // Check for existing assessment in progress
  useEffect(() => {
    const savedAssessment = localStorage.getItem('careerquest_assessment_progress');
    if (savedAssessment) {
      try {
        const parsed = JSON.parse(savedAssessment);
        setAssessment(parsed);
        // Find the next unanswered question
        const answeredQuestions = Object.keys(parsed.answers);
        if (answeredQuestions.length < totalQuestions) {
          const nextUnansweredIndex = assessmentQuestions.findIndex(
            q => !answeredQuestions.includes(q.id)
          );
          if (nextUnansweredIndex !== -1) {
            setCurrentQuestionIndex(nextUnansweredIndex);
          }
        }
      } catch (error) {
        console.error("Error parsing saved assessment:", error);
      }
    }
  }, []);
  
  // Save progress as user answers questions
  useEffect(() => {
    if (Object.keys(assessment.answers).length > 0) {
      localStorage.setItem('careerquest_assessment_progress', JSON.stringify(assessment));
    }
  }, [assessment]);
  
  return (
    <PageTransition pageName="assessment" className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Career Assessment</h1>
              <p className="text-xl text-muted-foreground">
                Answer the questions below to discover your ideal career path and subject recommendations.
              </p>
            </div>
            
            <div className="mb-8 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="mb-12">
              <QuestionCard
                question={currentQuestion}
                currentAnswer={assessment.answers[currentQuestion.id] || null}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                isPreviousDisabled={currentQuestionIndex === 0}
                isLastQuestion={currentQuestionIndex === totalQuestions - 1}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={totalQuestions}
              />
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Take your time to consider each question carefully. Your answers will help us provide personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Assessment;
