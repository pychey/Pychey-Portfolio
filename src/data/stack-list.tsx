import CssIcon from "@/components/icons/css";
import FlutterIcon from "@/components/icons/flutter";
import HtmlIcon from "@/components/icons/html";
import NestjsIcon from "@/components/icons/nestjs";
import NextjsIcon from "@/components/icons/nextjs";
import NodejsIcon from "@/components/icons/nodejs";
import PostgresqlIcon from "@/components/icons/postgresql";
import PrismaIcon from "@/components/icons/prisma";
import ReactjsIcon from "@/components/icons/reactjs";
import SocketIcon from "@/components/icons/socketio";
import TailwindIcon from "@/components/icons/tailwindcss";
import TypeScriptIcon from "@/components/icons/typescript";
import { TechStack } from "@/types/tech-stack";

export const stackList: TechStack[] = [
  {
    icon: <HtmlIcon />,
    hoverColor: 'group-hover:text-[#e65100] group-active:text-[#e65100]',
    label: 'HTML5',
  },
  {
    icon: <CssIcon />,
    hoverColor: 'group-hover:text-[#0277bd] group-active:text-[#0277bd]',
    label: 'CSS',
  },
  {
    icon: <TypeScriptIcon />,
    hoverColor: 'group-hover:text-[#007acc] group-active:text-[#007acc]',
    label: 'TypeScript',
  },
  {
    icon: <NodejsIcon />,
    hoverColor: 'group-hover:text-[#8bc34a] group-active:text-[#8bc34a]',
    label: 'Node.js',
  },
  {
    icon: <ReactjsIcon />,
    hoverColor: 'group-hover:text-[#00d8ff] group-active:text-[#00d8ff]',
    label: 'React.js',
  },
  {
    icon: <TailwindIcon />,
    hoverColor: 'group-hover:text-[#4db6ac] group-active:text-[#4db6ac]',
    label: 'TailwindCSS',
  },
  {
    icon: <NextjsIcon />,
    hoverColor: 'group-hover:text-primary group-active:text-primary',
    label: 'Next.js',
  },
  {
    icon: <NestjsIcon />,
    hoverColor: 'group-hover:text-[#e0234e] group-active:text-[#e0234e]',
    label: 'Nest.js',
  },
  {
    icon: <FlutterIcon />,
    hoverColor: 'group-hover:text-[#3fb6d3] group-active:text-[#3fb6d3]',
    label: 'Flutter',
  },
  {
    icon: <PostgresqlIcon />,
    hoverColor: 'group-hover:text-[#336791] group-active:text-[#336791]',
    label: 'PostgresSQL',
  },
  {
    icon: <PrismaIcon />,
    hoverColor: 'group-hover:text-[#00bfa5] group-active:text-[#00bfa5]',
    label: 'PrismaORM',
  },
  {
    icon: <SocketIcon />,
    hoverColor: 'group-hover:text-primary group-active:text-primary',
    label: 'Socket.io',
  },
];