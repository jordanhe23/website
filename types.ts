import { ReactNode } from 'react';

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: (string | ReactNode)[];
}

export interface SkillMetric {
  subject: string;
  A: number; // Current Proficiency
  fullMark: number;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}