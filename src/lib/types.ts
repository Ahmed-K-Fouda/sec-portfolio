export interface Project {
  id: string;
  title: string;
  description?: string;
  longDescription?: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  featured?: boolean;
  netlify: string;
}

export type Theme = "dark" | "light" | "system";
