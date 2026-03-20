'use client'

import ProjectCard from "../_components/project-card";
import { projectList } from "@/data/project-list";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main className="mt-12 flex flex-col gap-8">
      <h1 className="font-semibold text-2xl text-muted-foreground tracking-tight">My Projects</h1>
      {projectList.map(project => (
        <ProjectCard
          key={project.title}
          coverImage={project.coverImage} 
          title={project.title} 
          description={project.description} 
          stacks={project.stacks} 
          githubLink={project.githubLink}
          websiteLink={project.websiteLink}
        />
      ))}
    </main>
  );
}