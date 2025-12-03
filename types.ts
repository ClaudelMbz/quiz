export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0 for A, 1 for B, etc.
  explanation: string;
}

export enum QuizState {
  INTRO = 'INTRO',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED'
}
