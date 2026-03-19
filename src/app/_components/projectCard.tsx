import Image from "next/image";
import TechItem from "./techItem";
import NextjsIcon from "@/components/icons/nextjs";

const ProjectCard = () => {
  return (
    <div className="p-4 border rounded-2xl flex flex-col gap-4">
      <Image className="w-full h-[200px] object-cover rounded-lg border" src='https://lh3.googleusercontent.com/a/ACg8ocKCdhQw9aJSVPcXBzvsMGWwsohyqNqz08mlD5Igkjy633s3Sgdz=s576-c-no' alt='image of pychey' width='1920' height='1080'/>
      <h2 className="font-semibold">Online Learning Platform</h2>
      <p className="text-sm text-foreground/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi quisquam id distinctio libero.</p>
      <div className="grid grid-cols-6 gap-4">
        <TechItem
          icon={<NextjsIcon size={16}/>}
          width={'w-full'} 
          height={'h-[30px] sm:h-[40px]'}
        />
        <TechItem 
          icon={<NextjsIcon size={16}/>}
          width={'w-full'} 
          height={'h-[30px] sm:h-[40px]'}            
        />
        <TechItem 
          icon={<NextjsIcon size={16}/>}
          width={'w-full'} 
          height={'h-[30px] sm:h-[40px]'}            
        />
        <TechItem 
          icon={<NextjsIcon size={16}/>}
          width={'w-full'} 
          height={'h-[30px] sm:h-[40px]'}            
        />
        <TechItem 
          icon={<NextjsIcon size={16}/>}
          width={'w-full'} 
          height={'h-[30px] sm:h-[40px]'}            
        />
      </div>
    </div>
  );
}

export default ProjectCard;