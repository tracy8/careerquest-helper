
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CareerPath } from "@/data/career-paths";
import { CareerIconComponent } from "@/components/career-icon";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareerPathCardProps {
  careerPath: CareerPath;
  matchScore: number;
  onClick: (career: CareerPath) => void;
  rank: number;
}

export const CareerPathCard: React.FC<CareerPathCardProps> = ({
  careerPath,
  matchScore,
  onClick,
  rank
}) => {
  // Determine badge color based on job outlook
  const getOutlookBadgeColor = (outlook: string) => {
    switch (outlook) {
      case 'excellent':
        return "bg-green-500 hover:bg-green-600";
      case 'good':
        return "bg-blue-500 hover:bg-blue-600";
      case 'fair':
        return "bg-amber-500 hover:bg-amber-600";
      case 'limited':
        return "bg-rose-500 hover:bg-rose-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };
  
  // Determine card border color based on rank
  const getRankBorderColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "border-amber-300";
      case 2:
        return "border-gray-300";
      case 3:
        return "border-amber-600";
      default:
        return "border-transparent";
    }
  };

  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:shadow-md overflow-hidden cursor-pointer",
        "transform hover:-translate-y-1 border-2",
        getRankBorderColor(rank)
      )}
      onClick={() => onClick(careerPath)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
            <CareerIconComponent name={careerPath.icon as any} className="text-primary" size={24} />
          </div>
          {rank <= 3 && (
            <Badge variant="outline" className={cn(
              "text-xs px-2 py-0.5 border",
              rank === 1 ? "border-amber-300 bg-amber-50 text-amber-800" :
              rank === 2 ? "border-gray-300 bg-gray-50 text-gray-800" :
              "border-amber-600 bg-amber-50 text-amber-800"
            )}>
              #{rank} Match
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{careerPath.title}</CardTitle>
        <CardDescription className="line-clamp-2">{careerPath.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Match Score</span>
            <span>{matchScore}%</span>
          </div>
          <Progress value={matchScore} className="h-2" />
        </div>
        
        <div className="flex flex-wrap gap-1">
          <Badge className={getOutlookBadgeColor(careerPath.jobOutlook)}>
            {careerPath.jobOutlook.charAt(0).toUpperCase() + careerPath.jobOutlook.slice(1)} Outlook
          </Badge>
          <Badge variant="outline">Market Demand: {careerPath.marketDemand}/10</Badge>
        </div>
        
        <div className="pt-2">
          <div className="text-sm font-medium mb-1">Key Subjects:</div>
          <div className="flex flex-wrap gap-1">
            {careerPath.subjectCombinations[0].subjects.map((subject, index) => (
              <Badge key={index} variant="secondary">{subject}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="ghost" className="w-full flex justify-between items-center text-primary">
          View Details <ChevronRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};
