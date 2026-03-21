import GithubIcon from "@/components/icons/github";
import TelegramIcon from "@/components/icons/telegram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 flex justify-between items-center">
      <nav aria-label="Social links">
        <ul className="flex gap-2">
          <li>
            <a href={'https://github.com/pychey'} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="text-muted-foreground size-6 sm:size-7"/>
            </a>
          </li>
          <li>
            <a href={'https://t.me/pycheyy'} target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="text-muted-foreground size-6 sm:size-7"/>
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-sm sm:text-base text-muted-foreground">last updated: 17/03/2026</p>
    </footer>
  );
}

export default Footer;