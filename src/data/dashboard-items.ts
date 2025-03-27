
import { CareerIcon } from "@/components/career-icon";

export interface DashboardItem {
  title: string;
  description: string;
  icon: keyof typeof CareerIcon;
  link: string;
  complete?: boolean;
  progress?: number;
}

export const studentDashboardItems: DashboardItem[] = [
  {
    title: "Career Assessment",
    description: "Discover your strengths and interests through our comprehensive career assessment",
    icon: "ClipboardList",
    link: "/assessment",
    progress: 0
  },
  {
    title: "Subject Recommendations",
    description: "Explore A-Level subject combinations that match your career goals",
    icon: "Lightbulb",
    link: "/results",
    complete: false
  },
  {
    title: "Career Exploration",
    description: "Learn about different careers and what they involve",
    icon: "Compass",
    link: "/careers",
    complete: false
  },
  {
    title: "Resources",
    description: "Access guides, videos, and additional information to help with your decision",
    icon: "BookOpen",
    link: "/resources",
    complete: false
  }
];

export const parentDashboardItems: DashboardItem[] = [
  {
    title: "Student Progress",
    description: "Track your child's career exploration journey",
    icon: "TrendingUp",
    link: "/progress",
    complete: false
  },
  {
    title: "Parent Resources",
    description: "Guides to help you support your child's career decisions",
    icon: "FileText",
    link: "/parent-resources",
    complete: false
  },
  {
    title: "Communication",
    description: "Connect with teachers and career counselors",
    icon: "MessageSquare",
    link: "/messages",
    complete: false
  }
];

export const teacherDashboardItems: DashboardItem[] = [
  {
    title: "Student Management",
    description: "View and manage student assessments and career paths",
    icon: "Users",
    link: "/students",
    complete: false
  },
  {
    title: "Resources",
    description: "Access teaching materials for career guidance",
    icon: "BookOpen",
    link: "/teacher-resources",
    complete: false
  },
  {
    title: "Analytics",
    description: "View trends and insights from student career choices",
    icon: "BarChart2",
    link: "/analytics",
    complete: false
  }
];
