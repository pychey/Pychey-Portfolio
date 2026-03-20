import Description from "@/app/_components/description";
import JourneyItem from "@/app/_components/journey-item";
import ProjectCard from "@/app/_components/project-card";
import TechItem from "@/app/_components/tech-item";
import DownloadIcon from "@/components/icons/download";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import NextjsIcon from "@/components/icons/nextjs";
import TelegramIcon from "@/components/icons/telegram";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import { projectList } from "@/data/project-list";
import { stackList } from "@/data/stack-list";
import { Github, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-12 flex flex-col gap-12">
      <section className="flex flex-col">
        <div className="relative w-full h-[200px]">
          <Image className="object-cover object-center rounded-t-xl" src='https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no' alt='image' fill/>
          <div className="absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background"/>
        </div>
        <div className="mt-2 flex gap-6">
          <Image className="rounded-full object-cover w-16 h-16 p-0.5 ring-2 ring-border" src='https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no' alt='image of pychey' width='50' height='50'/>
          <div className="mt-1">
            <h1 className="font-bold text-xl">Hey, I'm Pychey</h1>
            <h2 className="text-md mt-1 text-muted-foreground">Software Developer</h2>
          </div>
        </div>
        <Description />
      </section>
      <section className="flex flex-col gap-4 scroll-mt-6" id="journey">
        <h1 className="font-bold text-lg text-muted-foreground tracking-tight">Education</h1>
        <div className="p-4 border rounded-2xl flex flex-col gap-8">
          <JourneyItem />
        </div>
      </section>
      <section className="flex flex-col gap-4 scroll-mt-6" id="skills">
        <h1 className="font-bold text-lg text-muted-foreground tracking-tight">Tech Stack</h1>
        <div className="grid grid-cols-4 gap-4">
          {stackList.map(stack => (
            <TechItem 
            key={stack.label}
              stack={{
                icon: stack.icon,
                hoverColor: stack.hoverColor,
                label: stack.label
              }}
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4 scroll-mt-6" id="projects">
        <div className="flex justify-between items-center text-muted-foreground tracking-tight">
          <h1 className="font-bold text-lg">Recent Projects</h1>
          <Link href={'/projects'} className="text-sm hover:text-foreground">View More</Link>
        </div>
        {projectList.map(project => (
          <ProjectCard
            key={project.title}
            coverImage={project.coverImage} 
            title={project.title} 
            description={project.description} 
            stacks={project.stacks} 
            showLinks={false}
          />
        ))}
      </section>
    </main>
  );
}