export interface Episode {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  duration: string;
  publishedDate: string;
  frameworks: string[];
  concepts: string[];
}

export interface Framework {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  episodeId: string;
  conceptIds: string[];
}

export interface Concept {
  id: string;
  name: string;
  description: string;
  frameworkId: string;
  timestamps: {
    episodeId: string;
    time: string;
    context: string;
  }[];
  biblicalRefs: string[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  frameworkId: string;
  conceptId?: string;
  biblicalRef?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface BiblicalReference {
  id: string;
  reference: string;
  translation: string;
  text: string;
  application: string;
  isPrimary: boolean;
  conceptIds: string[];
}

export interface UserProgress {
  completedFlashcards: string[];
  completedEpisodes: string[];
  lastStudied: string;
}
