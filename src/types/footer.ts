export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterSocial {
  id: string;
  href: string;
}

export interface FooterData {
  navigation: FooterLink[];
  socials: FooterSocial[];
}