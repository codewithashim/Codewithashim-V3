export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  location: string;
  date: string;
  desc: string;
  skills: string[];
  responsibilities: string[];
}
 

export interface Project {
  id: string;
  cover_image?: any;
  description?: string;
  featured?: string;
  live_url?: string;
  github_url?: string;
  project_type?: string;
  role?: string;
  technologies: string[];
  title: string;
  start_date: string;
  end_date: string;
  client?: string;
  github_url_fe?: string;
  github_url_be?: string;
  team_size?: string;
  isOngoing:string;
}
