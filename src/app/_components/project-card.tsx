import Image from "next/image";
import TechItem from "./tech-item";
import NextjsIcon from "@/components/icons/nextjs";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/icons/github";
import WebIcon from "@/components/icons/web";
import { ProjectProps } from "@/types/project-prop";

const ProjectCard = ({coverImage, title, description, stacks, showLinks = true, githubLink, websiteLink}: ProjectProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 border rounded-2xl flex flex-col gap-4">
        <Image className="w-full h-[200px] object-cover rounded-lg border" src={coverImage} alt='image of pychey' width='1920' height='1080'/>
        <h2 className="text-base sm:text-lg font-semibold">{title}</h2>
        <p className="text-sm text-foreground/90">{description}</p>
        <div className="grid grid-cols-6 gap-4">
          {stacks.map((stack, index) => (
            <TechItem 
              key={index}
              stack={{
                icon: stack.icon
              }}
              width={'w-full'} 
              height={'h-[30px] sm:h-[40px]'}
            />
          ))}
        </div>
      </div>
      {showLinks && (
        <div className="flex gap-2">
          {githubLink && (
            <Button variant={'outline'} className="p-4 sm:p-5 w-[100px] sm:w-[110px] h-[40px] flex gap-2">
              <GithubIcon className="size-5 sm:size-6"/>
              Source
            </Button>
          )}
          {websiteLink && (
            <Button className="p-4 sm:p-5 w-[90px] sm:w-[100px] h-[40px] flex gap-2">
              <WebIcon className="size-4 sm:size-5"/>
              Visit
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;