import { StaticImageData } from "next/image";
import { TechStack } from "./tech-stack";

export type ProjectProps = {
  coverImage: StaticImageData;
  title: string;
  description: string;
  stacks: TechStack[];
  showLinks?: boolean;
  githubLink?: string;
  websiteLink?: string;
};