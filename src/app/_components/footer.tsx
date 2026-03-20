import GithubIcon from "@/components/icons/github";
import TelegramIcon from "@/components/icons/telegram";
import Link from "next/link";

const Footer = () => {
  return (
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
  );
}

export default Footer;