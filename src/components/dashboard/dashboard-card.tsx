
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CareerIconComponent } from "@/components/career-icon";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  className?: string;
  complete?: boolean;
  progress?: number;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
  complete,
  progress
}) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 border-2",
        complete ? "border-green-100" : "border-transparent",
        className
      )}
    >
      <CardHeader className="relative pb-2">
        {complete && (
          <Badge className="absolute right-6 top-6 bg-green-500">
            <Check size={12} className="mr-1" /> Complete
          </Badge>
        )}
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
          <CareerIconComponent name={icon as any} className="text-primary" size={24} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {typeof progress === 'number' && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={link}>
            {complete ? "Review" : progress && progress > 0 ? "Continue" : "Start"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
