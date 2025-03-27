
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/data/assessment-questions";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  currentAnswer: string | null;
  onAnswer: (optionId: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  isPreviousDisabled: boolean;
  isLastQuestion: boolean;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  onAnswer,
  onNext,
  onPrevious,
  isPreviousDisabled,
  isLastQuestion,
  questionNumber,
  totalQuestions
}) => {
  const handleAnswer = (value: string) => {
    onAnswer(value);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto transition-all duration-500 animate-scale-in shadow-md">
      <CardHeader className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Question {questionNumber} of {totalQuestions}</span>
          <span className="text-sm font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{question.category}</span>
        </div>
        <CardTitle className="text-xl md:text-2xl">{question.text}</CardTitle>
        <CardDescription>Choose the option that best describes you.</CardDescription>
      </CardHeader>
      
      <CardContent>
        <RadioGroup 
          value={currentAnswer || ""} 
          onValueChange={handleAnswer}
          className="space-y-4"
        >
          {question.options.map((option) => (
            <div
              key={option.id}
              className={cn(
                "flex items-center space-x-2 rounded-lg border p-4 transition-all",
                currentAnswer === option.id 
                  ? "border-primary bg-primary/5" 
                  : "hover:border-muted-foreground/50 hover:bg-muted/50"
              )}
            >
              <RadioGroupItem 
                value={option.id} 
                id={option.id} 
                className="mt-1"
              />
              <Label 
                htmlFor={option.id} 
                className="flex-1 cursor-pointer text-base font-medium text-foreground"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={onPrevious}
          disabled={isPreviousDisabled}
        >
          Previous
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!currentAnswer}
        >
          {isLastQuestion ? "See Results" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
};
