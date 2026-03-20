import { ThemeToggleButton } from "@/components/theme-toggle-button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between">
      <Link href='/' className="flex items-center font-bold text-2xl">PP</Link>
      <nav>
        <ul className="flex justify-between items-center w-[240px]">
          <li>
            <Link href='/#journey' className="text-muted-foreground">journey</Link>
          </li>
          <li>
            <Link href='/#skills' className="text-muted-foreground">skills</Link>
          </li>
          <li>
            <Link href='/#projects' className="text-muted-foreground">projects</Link>
          </li>
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;