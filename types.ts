export type ProjectType = 'image' | 'video' | 'audio' | 'text';

export interface Project {
  id: number;
  type: ProjectType;
  imageUrl: string;
  role: string;
  goal: string;
  metrics: string;
}

export interface Creator {
  id: number;
  name: string;
  avatar: string;
  title: string;
  location: string;
  successScore: number;
  rate: string;
  bio: string;
  responseTime: string;
  completionRate: string;
  repeatClients: string;
  tags: string[];
  projects: Project[];
}

export interface Opportunity {
    id: number;
    companyName: string;
    companyLogo: string;
    jobTitle: string;
    budget: string;
    description: string;
    requiredSkills: string[];
    projectType: ProjectType;
}
