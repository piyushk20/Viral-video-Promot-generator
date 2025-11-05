import { Genre, TrendData } from './types';

export const GENRES: Genre[] = [
  Genre.EDUCATIONAL,
  Genre.ENTERTAINMENT,
  Genre.INSPIRATIONAL,
  Genre.PRODUCT,
  Genre.STORYTELLING,
  Genre.AESTHETIC,
  Genre.NEWS,
];

export const DURATIONS = ['Under 15s', '15s - 30s', '30s - 60s', 'Over 60s'];

export const TREND_DATA: TrendData[] = [
    { genre: Genre.ENTERTAINMENT, engagementRate: "+15%", viralityScore: "95/100" },
    { genre: Genre.EDUCATIONAL, engagementRate: "+8%", viralityScore: "88/100" },
    { genre: Genre.AESTHETIC, engagementRate: "+12%", viralityScore: "92/100" },
    { genre: Genre.STORYTELLING, engagementRate: "+10%", viralityScore: "90/100" },
    { genre: Genre.PRODUCT, engagementRate: "+7%", viralityScore: "85/100" },
];

export const ASPECT_RATIOS = {
  '9:16 (Vertical)': 'Optimized for TikTok, Reels, Shorts',
  '16:9 (Horizontal)': 'Best for YouTube, widescreen displays',
  '1:1 (Square)': 'Great for Instagram & Facebook feeds',
  '4:5 (Portrait)': 'Taller portrait for feed visibility',
};

export const MOTION_INTENSITIES = {
  'Low': 'Calm, cinematic, smooth pans',
  'Medium': 'Standard action, engaging movement',
  'High': 'Fast-paced, high-energy, dynamic cuts',
  'Hyper-dynamic': 'Intense, action-movie style',
};

export const COLOR_GRADINGS = {
  'Vibrant & Saturated': 'Pops on mobile, grabs attention',
  'Cinematic Teal & Orange': 'Classic film look, professional feel',
  'Vintage & Muted': 'Nostalgic, aesthetic, film-like',
  'Monochromatic': 'Artistic, dramatic, focused on form',
  'Neon & Cyberpunk': 'High-tech, futuristic, edgy',
};

export const SOUNDTRACK_MOODS = {
  'Uplifting & Epic': 'Inspirational, motivational content',
  'Chill Lo-fi': 'Relaxing, aesthetic, study vibes',
  'Upbeat & Funky': 'Energetic, comedic, engaging',
  'Tense & Suspenseful': 'Dramatic, storytelling, cliffhangers',
  'Emotional & Cinematic': 'Powerful, heartwarming, narrative',
};
