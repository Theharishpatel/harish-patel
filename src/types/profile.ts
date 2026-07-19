export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;

  role: string;

  tagline: string;

  bio: string;

  location: string;

  email: string;

  phone?: string;

  avatar: string;

  resume: string;

  availableForWork: boolean;
}