
export interface CareerPath {
  id: string;
  title: string;
  description: string;
  category: string;
  subjectCombinations: SubjectCombination[];
  skills: string[];
  jobOutlook: 'excellent' | 'good' | 'fair' | 'limited';
  marketDemand: number; // 1-10 scale
  icon: string;
}

export interface SubjectCombination {
  id: string;
  name: string;
  subjects: string[];
  description: string;
}

export const careerPaths: CareerPath[] = [
  {
    id: 'engineering',
    title: 'Engineering',
    description: 'Design, build, and maintain structures, machines, systems, and processes using scientific principles.',
    category: 'STEM',
    subjectCombinations: [
      {
        id: 'pcm',
        name: 'PCM',
        subjects: ['Physics', 'Chemistry', 'Mathematics'],
        description: 'The classic combination for most engineering fields, providing a strong foundation in physical sciences and mathematical principles.'
      },
      {
        id: 'mpc',
        name: 'MPC',
        subjects: ['Mathematics', 'Physics', 'Computer Science'],
        description: 'Excellent for software engineering, computer engineering, and technology-focused engineering roles.'
      }
    ],
    skills: ['Problem-solving', 'Mathematical reasoning', 'Critical thinking', 'Technical design', 'Analytical skills'],
    jobOutlook: 'excellent',
    marketDemand: 9,
    icon: 'Building2'
  },
  {
    id: 'medicine',
    title: 'Medicine & Healthcare',
    description: 'Diagnose, treat, and prevent illness and injury in patients through examination, testing, and providing healthcare advice.',
    category: 'HSW',
    subjectCombinations: [
      {
        id: 'pcb',
        name: 'PCB',
        subjects: ['Physics', 'Chemistry', 'Biology'],
        description: 'Essential combination for medical studies, covering all the fundamental sciences needed for understanding human health.'
      },
      {
        id: 'mcb',
        name: 'MCB',
        subjects: ['Mathematics', 'Chemistry', 'Biology'],
        description: 'Strong foundation for medicine, pharmacy, and biomedical fields requiring statistical analysis.'
      }
    ],
    skills: ['Attention to detail', 'Empathy', 'Communication', 'Critical thinking', 'Decision-making under pressure'],
    jobOutlook: 'excellent',
    marketDemand: 10,
    icon: 'HeartPulse'
  },
  {
    id: 'computer-science',
    title: 'Computer Science & IT',
    description: 'Develop software, manage information systems, and solve computing problems to meet organizational and user needs.',
    category: 'STEM',
    subjectCombinations: [
      {
        id: 'mpc',
        name: 'MPC',
        subjects: ['Mathematics', 'Physics', 'Computer Science'],
        description: 'Ideal combination for computer science, providing strong mathematical and logical foundations along with hardware understanding.'
      },
      {
        id: 'mce',
        name: 'MCE',
        subjects: ['Mathematics', 'Computer Science', 'Economics'],
        description: 'Excellent for careers in data science, business intelligence, and technology-driven business solutions.'
      }
    ],
    skills: ['Logical thinking', 'Problem-solving', 'Attention to detail', 'Creativity', 'Continuous learning'],
    jobOutlook: 'excellent',
    marketDemand: 10,
    icon: 'Code2'
  },
  {
    id: 'environmental-science',
    title: 'Environmental Science',
    description: 'Study, monitor, and protect the environment through research, conservation efforts, and sustainable practices.',
    category: 'STEM',
    subjectCombinations: [
      {
        id: 'pcb',
        name: 'PCB',
        subjects: ['Physics', 'Chemistry', 'Biology'],
        description: 'Provides a comprehensive understanding of the natural sciences needed to analyze environmental systems and challenges.'
      },
      {
        id: 'meg',
        name: 'MEG',
        subjects: ['Mathematics', 'Economics', 'Geography'],
        description: 'Useful for environmental economics, GIS analysis, and sustainable development planning.'
      }
    ],
    skills: ['Research methodology', 'Data analysis', 'Field sampling', 'Sustainability planning', 'Ecological understanding'],
    jobOutlook: 'good',
    marketDemand: 8,
    icon: 'Leaf'
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Collect, analyze, and interpret complex data to help organizations make better decisions and develop new solutions.',
    category: 'STEM',
    subjectCombinations: [
      {
        id: 'mpc',
        name: 'MPC',
        subjects: ['Mathematics', 'Physics', 'Computer Science'],
        description: 'Provides the strong quantitative and computational foundation needed for advanced data analysis.'
      },
      {
        id: 'mce',
        name: 'MCE',
        subjects: ['Mathematics', 'Computer Science', 'Economics'],
        description: 'Excellent for careers combining business insights with technical data analysis capabilities.'
      }
    ],
    skills: ['Statistical analysis', 'Programming', 'Machine learning', 'Data visualization', 'Critical thinking'],
    jobOutlook: 'excellent',
    marketDemand: 9,
    icon: 'BarChart2'
  },
  {
    id: 'biotech',
    title: 'Biotechnology',
    description: 'Apply biological systems, living organisms, or derivatives to develop technologies and products for specific uses like medicine or agriculture.',
    category: 'STEM',
    subjectCombinations: [
      {
        id: 'pcb',
        name: 'PCB',
        subjects: ['Physics', 'Chemistry', 'Biology'],
        description: 'Essential for understanding biological processes and the chemical principles behind biotechnology.'
      },
      {
        id: 'mcb',
        name: 'MCB',
        subjects: ['Mathematics', 'Chemistry', 'Biology'],
        description: 'Provides quantitative skills for data analysis along with the key sciences for biotechnology.'
      }
    ],
    skills: ['Laboratory techniques', 'Scientific research', 'Problem-solving', 'Attention to detail', 'Critical analysis'],
    jobOutlook: 'good',
    marketDemand: 8,
    icon: 'Microscope'
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    description: 'Design, implement, and maintain renewable energy systems to create sustainable power sources and reduce carbon footprint.',
    category: 'STEM',
    subjectCombinations: [
      {
        id: 'pcm',
        name: 'PCM',
        subjects: ['Physics', 'Chemistry', 'Mathematics'],
        description: 'Provides the physical and mathematical foundation needed to understand energy systems and materials.'
      },
      {
        id: 'meg',
        name: 'MEG',
        subjects: ['Mathematics', 'Economics', 'Geography'],
        description: 'Good for roles involving economic feasibility and geographical planning of renewable energy projects.'
      }
    ],
    skills: ['Technical design', 'Energy systems analysis', 'Project management', 'Sustainability planning', 'Problem-solving'],
    jobOutlook: 'excellent',
    marketDemand: 9,
    icon: 'Lightbulb'
  },
  {
    id: 'agriculture-science',
    title: 'Agricultural Science',
    description: 'Apply scientific principles to improve agricultural productivity, food quality, and sustainability in farming systems.',
    category: 'STEM',
    subjectCombinations: [
      {
        id: 'pcb',
        name: 'PCB',
        subjects: ['Physics', 'Chemistry', 'Biology'],
        description: 'Provides a strong foundation in the sciences needed to understand plant growth, soil science, and agricultural systems.'
      },
      {
        id: 'mcb',
        name: 'MCB',
        subjects: ['Mathematics', 'Chemistry', 'Biology'],
        description: 'Good for agricultural research and data-driven approaches to farming and sustainability.'
      }
    ],
    skills: ['Research methodology', 'Crop management', 'Sustainable practices', 'Analytical thinking', 'Problem-solving'],
    jobOutlook: 'good',
    marketDemand: 8,
    icon: 'Leaf'
  }
];
