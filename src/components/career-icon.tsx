
import React from "react";
import { 
  Building2, 
  HeartPulse, 
  Briefcase, 
  Code2, 
  GraduationCap,
  Palette, 
  Scale, 
  Leaf,
  ClipboardList,
  Lightbulb,
  Compass,
  BookOpen,
  TrendingUp,
  FileText,
  MessageSquare,
  Users,
  BarChart2,
  Microscope,
  LucideIcon 
} from "lucide-react";

export const CareerIcon: Record<string, LucideIcon> = {
  Building2,
  HeartPulse,
  Briefcase,
  Code2,
  GraduationCap,
  Palette,
  Scale,
  Leaf,
  ClipboardList,
  Lightbulb,
  Compass,
  BookOpen,
  TrendingUp,
  FileText,
  MessageSquare,
  Users,
  BarChart2,
  Microscope
};

interface CareerIconComponentProps {
  name: keyof typeof CareerIcon;
  className?: string;
  size?: number;
}

export const CareerIconComponent: React.FC<CareerIconComponentProps> = ({
  name,
  className,
  size = 24
}) => {
  const IconComponent = CareerIcon[name];
  
  return IconComponent ? (
    <IconComponent className={className} size={size} />
  ) : null;
};
