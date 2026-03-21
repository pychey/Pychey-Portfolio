import DownloadIcon from "@/components/icons/download";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import TelegramIcon from "@/components/icons/telegram";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Description = () => {
  return (
    <div className="flex flex-col mt-4">
      <p className="text-sm sm:text-base text-foreground/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ullam inventore.</p>
      <div className="mt-4 flex justify-between items-center">
        <a href={'/docs/resume.pdf'} target="_blank" rel="noopener noreferrer">
          <Button variant='outline' className="flex gap-2 p-4 sm:p-5 cursor-pointer">
            Resume
            <DownloadIcon />
          </Button>
        </a>
        <nav aria-label="Social links">
          <ul className="flex gap-4">
            <li>
              <Link href="https://github.com/pychey">
                <GithubIcon className="size-9 sm:size-10"/>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/pycheyy">
                <LinkedinIcon className="size-9 sm:size-10"/>
              </Link>
            </li>
            <li>
              <Link href="https://t.me/pycheyy">
                <TelegramIcon className="size-9 sm:size-10"/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Description;