export enum GameState {
  Start = 0,
  TopicSelection = 1,
  Playing = 2,
  Congrats = 3,
  TopicEditor = 4,
}

export interface VocabularyItem {
  en: string;
  vi?: string;
}

export interface TopicMap {
  [topicName: string]: VocabularyItem[];
}

export interface GameScore {
  score: number;
  maxScore: number;
  correct: number;
  total: number;
}
