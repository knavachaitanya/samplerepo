import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  pricing: 'Free' | 'Paid' | 'Freemium';
  website: string;
  icon: LucideIcon;
  backgroundColor: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}