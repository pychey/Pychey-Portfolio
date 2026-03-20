import DownloadIcon from "@/components/icons/download";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import TelegramIcon from "@/components/icons/telegram";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Description = () => {
  return (
    <div className="flex flex-col mt-4">
      <p className="text-sm text-foreground/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ullam inventore.</p>
      <div className="mt-4 flex justify-between items-center">
        <a href={'/ANSWER.pdf'} target="_blank">
          <Button variant='outline' className="flex gap-2 p-4 cursor-pointer">
            Resume
            <DownloadIcon />
          </Button>
        </a>
        <nav aria-label="Social links">
          <ul className="flex gap-4">
            <li>
              <Link href="https://github.com/pychey">
                <GithubIcon size={36}/>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/pycheyy">
                <LinkedinIcon size={36}/>
              </Link>
            </li>
            <li>
              <Link href="https://t.me/pycheyy">
                <TelegramIcon size={36}/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Description;