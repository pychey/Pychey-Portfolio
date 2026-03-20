import { TechStack } from "./tech-stack";

export type ProjectProps = {
  coverImage: string;
  title: string;
  description: string;
  stacks: TechStack[];
  showLinks?: boolean;
  githubLink?: string;
  websiteLink?: string;
};