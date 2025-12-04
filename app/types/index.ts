export interface Building {
  id: string;
  name: string;
  icon: string;
  description: string;
  challenge: string;
  color: string;
  facts: string[];
}

export interface Progress {
  completedBuildings: string[];
  score: number;
  userName?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Challenge {
  type: 'quiz' | 'drag-drop' | 'puzzle' | 'memory';
  title: string;
  description: string;
  data: any;
}
