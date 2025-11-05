
export enum Phase {
  INITIAL = 'INITIAL',
  REFINEMENT = 'REFINEMENT',
  TECHNICAL = 'TECHNICAL',
  FINAL = 'FINAL',
}

export enum Genre {
    EDUCATIONAL = 'Educational',
    ENTERTAINMENT = 'Entertainment & Comedy',
    INSPIRATIONAL = 'Inspirational & Motivational',
    PRODUCT = 'Product Showcase',
    STORYTELLING = 'Storytelling & Narrative',
    AESTHETIC = 'Aesthetic & Artistic',
    NEWS = 'News & Current Events',
}

export interface InitialInput {
  idea: string;
  genre: Genre;
  duration: string;
}

export interface Variation {
  title: string;
  description: string;
  viralElements: string[];
  engagementPotential: string;
}

export interface TechnicalSpecs {
  aspectRatio: string;
  motionIntensity: string;
  colorGrading: string;
  soundtrackMood: string;
}

export interface PromptGenerationData {
  initial: InitialInput;
  refined: Variation;
  technical: TechnicalSpecs;
}

export interface TrendData {
    genre: Genre;
    engagementRate: string;
    viralityScore: string;
}
