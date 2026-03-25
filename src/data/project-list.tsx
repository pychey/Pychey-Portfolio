import CssIcon from "@/components/icons/css";
import ExpressIcon from "@/components/icons/express";
import FlutterIcon from "@/components/icons/flutter";
import HtmlIcon from "@/components/icons/html";
import JavaIcon from "@/components/icons/java";
import JavascriptIcon from "@/components/icons/javascript";
import MysqlIcon from "@/components/icons/mysql";
import NestjsIcon from "@/components/icons/nestjs";
import NextjsIcon from "@/components/icons/nextjs";
import NodejsIcon from "@/components/icons/nodejs";
import PaymentIcon from "@/components/icons/payment";
import PostgresqlIcon from "@/components/icons/postgresql";
import PrismaIcon from "@/components/icons/prisma";
import ReactjsIcon from "@/components/icons/reactjs";
import SequelizeIcon from "@/components/icons/sequelize";
import SocketIcon from "@/components/icons/socketio";
import SwaggerIcon from "@/components/icons/swagger";
import TailwindIcon from "@/components/icons/tailwindcss";
import TypeScriptIcon from "@/components/icons/typescript";
import { ProjectProps } from "@/types/project-prop";
import { CatteImage, ClockodoroImage, DclImage, PacmanImage, SastraImage, SudokuImage, TosReviewImage } from "@/lib/assets";

export const projectList: ProjectProps[] = [
  {
    coverImage: CatteImage,
    title: 'Multiplayer Catte Game',
    description: 'Inspired by a card game I often play, where it gets more fun with more players.',
    stacks: [
      { icon: <ReactjsIcon className="size-4 sm:size-5"/> },
      { icon: <ExpressIcon className="size-4 sm:size-5"/> },
      { icon: <SocketIcon className="size-4 sm:size-5"/> },
      { icon: <SequelizeIcon className="size-4 sm:size-5"/> },
      { icon: <MysqlIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Catte-Card-Game',
    websiteLink: 'https://catte-card-game.vercel.app/'
  },
  {
    coverImage: SastraImage,
    title: 'Online Learning Platform',
    description: 'Users can explore, buy, and complete courses to earn certificates.',
    stacks: [
      { icon: <NextjsIcon className="size-4 sm:size-5"/> },
      { icon: <TailwindIcon className="size-4 sm:size-5"/> },
      { icon: <PrismaIcon className="size-4 sm:size-5"/> },
      { icon: <MysqlIcon className="size-4 sm:size-5"/> },
      { icon: <PaymentIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Online-Learning-Platform',
    websiteLink: 'https://sastra-online-learning-platform.vercel.app/'
  },
  {
    coverImage: TosReviewImage,
    title: 'Product Review App',
    description: 'Social platform where users express genuine opinions on products they’ve used.',
    stacks: [
      { icon: <FlutterIcon className="size-4 sm:size-5"/> },
      { icon: <NestjsIcon className="size-4 sm:size-5"/> },
      { icon: <PrismaIcon className="size-4 sm:size-5"/> },
      { icon: <PostgresqlIcon className="size-4 sm:size-5"/> },
      { icon: <TypeScriptIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Tos-Review-App',
    websiteLink: undefined
  },
  {
    coverImage: SudokuImage,
    title: 'Sudoku Multiplayer Game',
    description: 'Solving against each others in realtime, fun to play with friends or strangers.',
    stacks: [
      { icon: <FlutterIcon className="size-4 sm:size-5"/> },
      { icon: <NodejsIcon className="size-4 sm:size-5"/> },
      { icon: <ExpressIcon className="size-4 sm:size-5"/> },
      { icon: <SocketIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Sudoku-The-Best',
    websiteLink: undefined
  },
  {
    coverImage: ClockodoroImage,
    title: 'Clockodoro Project',
    description: 'Pomodoro relaxing timer with built-in task management to increase productivity.',
    stacks: [
      { icon: <ReactjsIcon className="size-4 sm:size-5"/> },
      { icon: <HtmlIcon className="size-4 sm:size-5"/> },
      { icon: <CssIcon className="size-4 sm:size-5"/> },
      { icon: <JavascriptIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Clockodoro',
    websiteLink: 'https://clockodoro.vercel.app/'
  },
  {
    coverImage: DclImage,
    title: 'Database User Permission System',
    description: 'Managing users, roles, and testing their database operation permissions.',
    stacks: [
      { icon: <HtmlIcon className="size-4 sm:size-5"/> },
      { icon: <CssIcon className="size-4 sm:size-5"/> },
      { icon: <NodejsIcon className="size-4 sm:size-5"/> },
      { icon: <ExpressIcon className="size-4 sm:size-5"/> },
      { icon: <MysqlIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/DCL-User-Permission-System',
    websiteLink: undefined
  },
  {
    coverImage: PacmanImage,
    title: 'Java Pacman Game',
    description: 'Control Pacman, dodge ghosts, and collect all points to win.',
    stacks: [
      { icon: <JavaIcon className="size-4 sm:size-5"/> },
      { icon: <MysqlIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Project-Pacman',
    websiteLink: undefined
  },
]