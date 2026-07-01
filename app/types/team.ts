export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  category: 'Organizer' | 'operations' | 'pr' | 'technical' | 'design'| 'Social';
  order: number;
}
