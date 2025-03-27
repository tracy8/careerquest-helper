
export interface Question {
  id: string;
  text: string;
  category: 'interests' | 'skills' | 'values' | 'personality';
  options: {
    id: string;
    text: string;
    score: {
      [key: string]: number;
    };
  }[];
}

// Career categories for scoring
// STEM: Science, Technology, Engineering, Math
// HMS: Humanities, Social Sciences
// CBA: Commerce, Business, Accounting
// CAS: Creative Arts, Sports
// HSW: Health Sciences, Wellness

export const assessmentQuestions: Question[] = [
  {
    id: 'q1',
    text: 'Which activities do you enjoy most in your free time?',
    category: 'interests',
    options: [
      {
        id: 'q1a',
        text: 'Solving puzzles or playing strategy games',
        score: { STEM: 3, HMS: 1, CBA: 2, CAS: 0, HSW: 1 }
      },
      {
        id: 'q1b',
        text: 'Reading books or writing stories',
        score: { STEM: 1, HMS: 3, CBA: 1, CAS: 2, HSW: 1 }
      },
      {
        id: 'q1c',
        text: 'Sports or physical activities',
        score: { STEM: 0, HMS: 0, CBA: 0, CAS: 3, HSW: 3 }
      },
      {
        id: 'q1d',
        text: 'Creating art, music, or crafts',
        score: { STEM: 1, HMS: 2, CBA: 0, CAS: 3, HSW: 0 }
      },
      {
        id: 'q1e',
        text: 'Managing money or planning events',
        score: { STEM: 1, HMS: 1, CBA: 3, CAS: 1, HSW: 0 }
      }
    ]
  },
  {
    id: 'q2',
    text: 'Which school subjects do you find most interesting?',
    category: 'interests',
    options: [
      {
        id: 'q2a',
        text: 'Mathematics and Physics',
        score: { STEM: 3, HMS: 0, CBA: 2, CAS: 0, HSW: 1 }
      },
      {
        id: 'q2b',
        text: 'Biology and Chemistry',
        score: { STEM: 2, HMS: 0, CBA: 0, CAS: 0, HSW: 3 }
      },
      {
        id: 'q2c',
        text: 'History, Literature, and Languages',
        score: { STEM: 0, HMS: 3, CBA: 1, CAS: 1, HSW: 0 }
      },
      {
        id: 'q2d',
        text: 'Business Studies and Economics',
        score: { STEM: 1, HMS: 1, CBA: 3, CAS: 0, HSW: 0 }
      },
      {
        id: 'q2e',
        text: 'Art, Music, or Physical Education',
        score: { STEM: 0, HMS: 1, CBA: 0, CAS: 3, HSW: 1 }
      }
    ]
  },
  {
    id: 'q3',
    text: 'How do you prefer to solve problems?',
    category: 'skills',
    options: [
      {
        id: 'q3a',
        text: 'Analyze data and find patterns',
        score: { STEM: 3, HMS: 1, CBA: 2, CAS: 0, HSW: 1 }
      },
      {
        id: 'q3b',
        text: 'Discuss with others to find solutions',
        score: { STEM: 1, HMS: 3, CBA: 2, CAS: 1, HSW: 2 }
      },
      {
        id: 'q3c',
        text: 'Take practical action and learn by doing',
        score: { STEM: 2, HMS: 1, CBA: 1, CAS: 2, HSW: 3 }
      },
      {
        id: 'q3d',
        text: 'Find creative or unconventional approaches',
        score: { STEM: 2, HMS: 2, CBA: 1, CAS: 3, HSW: 1 }
      },
      {
        id: 'q3e',
        text: 'Make a detailed plan and follow it step by step',
        score: { STEM: 2, HMS: 1, CBA: 3, CAS: 0, HSW: 2 }
      }
    ]
  },
  {
    id: 'q4',
    text: 'What type of work environment do you prefer?',
    category: 'values',
    options: [
      {
        id: 'q4a',
        text: 'Quiet environment where I can focus',
        score: { STEM: 2, HMS: 2, CBA: 1, CAS: 1, HSW: 2 }
      },
      {
        id: 'q4b',
        text: 'Active environment with lots of interaction',
        score: { STEM: 1, HMS: 2, CBA: 2, CAS: 2, HSW: 3 }
      },
      {
        id: 'q4c',
        text: 'Creative space where I can express ideas',
        score: { STEM: 1, HMS: 2, CBA: 1, CAS: 3, HSW: 1 }
      },
      {
        id: 'q4d',
        text: 'Structured environment with clear rules',
        score: { STEM: 2, HMS: 1, CBA: 3, CAS: 0, HSW: 2 }
      },
      {
        id: 'q4e',
        text: 'Changing environment with new challenges',
        score: { STEM: 2, HMS: 2, CBA: 2, CAS: 2, HSW: 1 }
      }
    ]
  },
  {
    id: 'q5',
    text: 'How would your friends describe you?',
    category: 'personality',
    options: [
      {
        id: 'q5a',
        text: 'Analytical and logical',
        score: { STEM: 3, HMS: 1, CBA: 2, CAS: 0, HSW: 1 }
      },
      {
        id: 'q5b',
        text: 'Creative and artistic',
        score: { STEM: 1, HMS: 2, CBA: 0, CAS: 3, HSW: 0 }
      },
      {
        id: 'q5c',
        text: 'Caring and supportive',
        score: { STEM: 0, HMS: 2, CBA: 1, CAS: 1, HSW: 3 }
      },
      {
        id: 'q5d',
        text: 'Organized and reliable',
        score: { STEM: 2, HMS: 1, CBA: 3, CAS: 0, HSW: 2 }
      },
      {
        id: 'q5e',
        text: 'Outgoing and persuasive',
        score: { STEM: 0, HMS: 2, CBA: 2, CAS: 2, HSW: 1 }
      }
    ]
  }
];

export const moreQuestions: Question[] = [
  {
    id: 'q6',
    text: 'Which of these tasks would you find most satisfying to complete?',
    category: 'interests',
    options: [
      {
        id: 'q6a',
        text: 'Building or fixing something with your hands',
        score: { STEM: 2, HMS: 0, CBA: 0, CAS: 2, HSW: 1 }
      },
      {
        id: 'q6b',
        text: 'Helping someone solve a personal problem',
        score: { STEM: 0, HMS: 3, CBA: 0, CAS: 1, HSW: 3 }
      },
      {
        id: 'q6c',
        text: 'Leading a team to achieve a goal',
        score: { STEM: 1, HMS: 2, CBA: 3, CAS: 1, HSW: 1 }
      },
      {
        id: 'q6d',
        text: 'Designing something new or innovative',
        score: { STEM: 3, HMS: 1, CBA: 1, CAS: 3, HSW: 0 }
      },
      {
        id: 'q6e',
        text: 'Investigating and researching information',
        score: { STEM: 2, HMS: 2, CBA: 1, CAS: 0, HSW: 2 }
      }
    ]
  },
  {
    id: 'q7',
    text: 'What impact would you like to have in your career?',
    category: 'values',
    options: [
      {
        id: 'q7a',
        text: 'Advancing technology and scientific knowledge',
        score: { STEM: 3, HMS: 0, CBA: 1, CAS: 0, HSW: 1 }
      },
      {
        id: 'q7b',
        text: 'Helping people and improving their lives',
        score: { STEM: 1, HMS: 2, CBA: 0, CAS: 0, HSW: 3 }
      },
      {
        id: 'q7c',
        text: 'Building successful businesses and creating jobs',
        score: { STEM: 1, HMS: 1, CBA: 3, CAS: 0, HSW: 0 }
      },
      {
        id: 'q7d',
        text: 'Expressing ideas and inspiring others through creativity',
        score: { STEM: 0, HMS: 2, CBA: 0, CAS: 3, HSW: 1 }
      },
      {
        id: 'q7e',
        text: 'Preserving culture and sharing knowledge',
        score: { STEM: 0, HMS: 3, CBA: 0, CAS: 2, HSW: 1 }
      }
    ]
  },
  {
    id: 'q8',
    text: 'What challenges would you be most willing to overcome in your career?',
    category: 'personality',
    options: [
      {
        id: 'q8a',
        text: 'Complex technical problems that require deep focus',
        score: { STEM: 3, HMS: 0, CBA: 1, CAS: 0, HSW: 1 }
      },
      {
        id: 'q8b',
        text: 'High-pressure situations with important decisions',
        score: { STEM: 1, HMS: 1, CBA: 2, CAS: 0, HSW: 3 }
      },
      {
        id: 'q8c',
        text: 'Financial risks and market uncertainties',
        score: { STEM: 1, HMS: 0, CBA: 3, CAS: 1, HSW: 0 }
      },
      {
        id: 'q8d',
        text: 'Creative blocks and the need for constant innovation',
        score: { STEM: 1, HMS: 1, CBA: 0, CAS: 3, HSW: 0 }
      },
      {
        id: 'q8e',
        text: 'Understanding complex social or cultural issues',
        score: { STEM: 0, HMS: 3, CBA: 1, CAS: 1, HSW: 2 }
      }
    ]
  }
];
