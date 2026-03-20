'use client'

import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <header className="flex justify-between">
      <a href='/' className="flex items-center font-bold text-2xl">PP</a>
      <nav>
        <ul className="flex justify-between items-center w-[240px] text-muted-foreground">
          <li>
            <button onClick={() => scrollTo('journey')}>journey</button>
          </li>
          <li>
            <button onClick={() => scrollTo('skills')}>skills</button>
          </li>
          <li>
            <button onClick={() => scrollTo('projects')}>projects</button>
          </li>
          <li className="text-foreground">
            <ThemeToggleButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;