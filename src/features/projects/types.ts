import type { GalleryImage } from "@/components/gallery";

export interface Project {
  name: string;
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  tech: string[];
  images: GalleryImage[];
  live?: string;
  repo?: string;
}
