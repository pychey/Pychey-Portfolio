import Description from "@/app/_components/description";
import JourneyItem from "@/app/_components/journeyItem";
import ProjectCard from "@/app/_components/projectCard";
import TechItem from "@/app/_components/techItem";
import DownloadIcon from "@/components/icons/download";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import NextjsIcon from "@/components/icons/nextjs";
import TelegramIcon from "@/components/icons/telegram";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-8 pb-6 px-6 max-w-[600px] mx-auto">
      <header className="flex justify-between">
        <Link href='/' className="flex items-center font-bold text-2xl">PP</Link>
        <nav>
          <ul className="flex justify-between items-center w-[240px]">
            <li>
              <Link href='#journey' className="text-muted-foreground">journey</Link>
            </li>
            <li>
              <Link href='#skills' className="text-muted-foreground">skills</Link>
            </li>
            <li>
              <Link href='#projects' className="text-muted-foreground">projects</Link>
            </li>
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </nav>
      </header>
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
            <TechItem 
              icon={<NextjsIcon />}
              hoverColor={'group-hover:text-blue-500 group-active:text-blue-500'}
              label='Next.js'
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}
            />
            <TechItem 
              icon={<NextjsIcon />}
              hoverColor={'group-hover:text-blue-500 group-active:text-blue-500'}
              label='Next.js' 
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}            
            />
            <TechItem 
              icon={<NextjsIcon />}
              hoverColor={'group-hover:text-blue-500 group-active:text-blue-500'}
              label='Next.js' 
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}            
            />
            <TechItem 
              icon={<NextjsIcon />}
              hoverColor={'group-hover:text-blue-500 group-active:text-blue-500'}
              label='Next.js' 
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}            
            />
            <TechItem 
              icon={<NextjsIcon />}
              hoverColor={'group-hover:text-blue-500 group-active:text-blue-500'}
              label='Next.js' 
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}            
            />
            <TechItem 
              icon={<NextjsIcon />}
              hoverColor={'group-hover:text-blue-500 group-active:text-blue-500'}
              label='Next.js' 
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}            
            />
            <TechItem 
              icon={<NextjsIcon />}
              hoverColor={'group-hover:text-blue-500 group-active:text-blue-500'}
              label='Next.js' 
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}            
            />
            <TechItem 
              icon={<NextjsIcon />}
              hoverColor={'group-hover:text-blue-500 group-active:text-blue-500'}
              label='Next.js' 
              width={'w-full'} 
              height={'h-[50px] sm:h-[75px]'}            
            />
          </div>
        </section>
        <section className="flex flex-col gap-4 scroll-mt-6" id="projects">
          <div className="flex justify-between items-center text-muted-foreground tracking-tight">
            <h1 className="font-bold text-lg">Recent Projects</h1>
            <Link href={'#'} className="text-sm hover:text-foreground">View More</Link>
          </div>
          <ProjectCard />
          <ProjectCard />
        </section>
      </main>
      <footer className="mt-12 flex justify-between items-center">
        <nav aria-label="Social links">
          <ul className="flex gap-2">
            <li>
              <Link href="https://github.com/pychey">
                <GithubIcon className="text-muted-foreground"/>
              </Link>
            </li>
            <li>
              <Link href="https://t.me/pycheyy">
                <TelegramIcon className="text-muted-foreground"/>
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">last updated: 17/03/2026</p>
      </footer>
    </div>
  );
}