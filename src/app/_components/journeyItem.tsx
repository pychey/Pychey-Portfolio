import Image from "next/image";

const JourneyItem = () => {
  return (
    <div className="flex gap-4">
      <Image className="object-cover p-0.5 ring-2 ring-border w-24 h-16" src={'https://www.cadt.edu.kh/wp-content/uploads/2023/02/cadt_square_logo_boundary.jpg'} alt='image' width={'100'} height={'30'}/>
      <div className="flex flex-col gap-4">
        <h1 className="text-sm font-semibold">Cambodia Academy of Digital of Cambodia</h1>
        <div className="flex flex-col gap-2 text-muted-foreground text-xs">
          <p>B.Sc. in Computer Science</p>
          <p>Feb 2023 - Present</p>
        </div>
      </div>
    </div>
  );
}

export default JourneyItem;