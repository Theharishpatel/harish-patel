export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface Contact {
  title: string;
  description: string;
  email: string;
  resume: string;
  socials: SocialLink[];
}