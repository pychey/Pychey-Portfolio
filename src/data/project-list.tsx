import CssIcon from "@/components/icons/css";
import ExpressIcon from "@/components/icons/express";
import FlutterIcon from "@/components/icons/flutter";
import HtmlIcon from "@/components/icons/html";
import JavaIcon from "@/components/icons/java";
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
import { ProjectProps } from "@/types/project-prop";

export const projectList: ProjectProps[] = [
  {
    coverImage: 'https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no',
    title: 'Multiplayer Catte Game',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi quisquam id distinctio libero.',
    stacks: [
      { icon: <ReactjsIcon className="size-4 sm:size-5"/> },
      { icon: <ExpressIcon className="size-4 sm:size-5"/> },
      { icon: <SocketIcon className="size-4 sm:size-5"/> },
      { icon: <SequelizeIcon className="size-4 sm:size-5"/> },
      { icon: <MysqlIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Catte-Card-Game',
    websiteLink: 'a'
  },
  {
    coverImage: 'https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no',
    title: 'Online Learning Platform',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi quisquam id distinctio libero.',
    stacks: [
      { icon: <NextjsIcon className="size-4 sm:size-5"/> },
      { icon: <TailwindIcon className="size-4 sm:size-5"/> },
      { icon: <PrismaIcon className="size-4 sm:size-5"/> },
      { icon: <MysqlIcon className="size-4 sm:size-5"/> },
      { icon: <PaymentIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Online-Learning-Platform',
    websiteLink: ''
  },
  {
    coverImage: 'https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no',
    title: 'Product Review App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi quisquam id distinctio libero.',
    stacks: [
      { icon: <FlutterIcon className="size-4 sm:size-5"/> },
      { icon: <NestjsIcon className="size-4 sm:size-5"/> },
      { icon: <PrismaIcon className="size-4 sm:size-5"/> },
      { icon: <PostgresqlIcon className="size-4 sm:size-5"/> },
      { icon: <SwaggerIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Tos-Review-App',
    websiteLink: ''
  },
  {
    coverImage: 'https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no',
    title: 'Sudoku Multiplayer Game',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi quisquam id distinctio libero.',
    stacks: [
      { icon: <FlutterIcon className="size-4 sm:size-5"/> },
      { icon: <NodejsIcon className="size-4 sm:size-5"/> },
      { icon: <ExpressIcon className="size-4 sm:size-5"/> },
      { icon: <SocketIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Sudoku-The-Best',
    websiteLink: ''
  },
  {
    coverImage: 'https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no',
    title: 'Java Pacman Game',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi quisquam id distinctio libero.',
    stacks: [
      { icon: <JavaIcon className="size-4 sm:size-5"/> },
      { icon: <MysqlIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/Project-Pacman',
    websiteLink: ''
  },
  {
    coverImage: 'https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no',
    title: 'Database User Permission System',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi quisquam id distinctio libero.',
    stacks: [
      { icon: <HtmlIcon className="size-4 sm:size-5"/> },
      { icon: <CssIcon className="size-4 sm:size-5"/> },
      { icon: <NodejsIcon className="size-4 sm:size-5"/> },
      { icon: <ExpressIcon className="size-4 sm:size-5"/> },
      { icon: <MysqlIcon className="size-4 sm:size-5"/> },
    ],
    githubLink: 'https://github.com/pychey/DCL-User-Permission-System',
    websiteLink: ''
  },
]