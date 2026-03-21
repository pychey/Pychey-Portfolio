import { CadtImage } from "@/lib/assets";
import Image from "next/image";

const JourneyItem = () => {
  return (
    <div className="flex gap-6">
      <Image className="object-cover p-0.5 ring-2 ring-border w-24 h-16" src={CadtImage} alt='cadt logo image'/>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm sm:text-base font-semibold">Cambodia Academy of Digital Technology</h1>
        <div className="flex flex-col gap-1 text-muted-foreground text-xs">
          <p>B.Sc. in Computer Science</p>
          <p>Feb 2023 - Present</p>
        </div>
      </div>
    </div>
  );
}

export default JourneyItem;