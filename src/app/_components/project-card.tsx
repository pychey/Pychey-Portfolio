import Image from "next/image";
import TechItem from "./tech-item";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/icons/github";
import WebIcon from "@/components/icons/web";
import { ProjectProps } from "@/types/project-prop";

const ProjectCard = ({coverImage, title, description, stacks, showLinks = true, githubLink, websiteLink}: ProjectProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 border rounded-2xl flex flex-col gap-4">
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-[200px] xs:h-[240px] rounded-lg border overflow-hidden">
            <Image className="object-cover blur-xs opacity-50" fill src={coverImage} alt=''/>
            <Image className="p-4 object-contain" fill src={coverImage} alt={`image of ${title}`}/>
          </div>
        </a>
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
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant={'outline'} className="p-4 sm:p-5 w-[100px] sm:w-[110px] h-[40px] flex gap-2">
                <GithubIcon className="size-5 sm:size-6"/>
                Source
              </Button>
            </a>
          )}
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
              <Button className="p-4 sm:p-5 w-[90px] sm:w-[100px] h-[40px] flex gap-2">
                <WebIcon className="size-4 sm:size-5"/>
                Visit
              </Button>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;