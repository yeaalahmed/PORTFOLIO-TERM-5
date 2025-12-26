export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  year: string;
  category: 'Design' | 'Robotics' | 'Thermodynamics' | 'Manufacturing' | 'Kinematic Analysis';
  pdfUrl?: string;
  videoUrl?: string;
  coverUrl?: string;
  useVideoAsCover?: boolean;
  drawingsUrl?: string;
}

export interface MakeAndTakeItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: string;
}

export interface Experience {
  role: string;
  company: string;
  details: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}