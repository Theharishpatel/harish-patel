export interface Technology {
  name: string;

  icon: string;

  category:
    | "Frontend"
    | "Backend"
    | "Language"
    | "Database"
    | "Tools";
}