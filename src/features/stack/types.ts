export type StackIcon =
  | "frontend"
  | "backend"
  | "database"
  | "cloud"
  | "tooling"
  | "data";

export interface StackItem {
  name: string;
  /** Marked as a core skill on the card */
  core?: boolean;
}

export interface StackGroup {
  id: string;
  title: string;
  description: string;
  icon: StackIcon;
  items: StackItem[];
}
