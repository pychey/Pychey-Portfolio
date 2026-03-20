import { TechProps } from "@/types/tech-prop";

const TechItem = ({ stack, width, height }: TechProps) => {
  return (
    <div className={`group ${width} ${height} border flex flex-col gap-2 justify-center items-center rounded-md`}>
      <div className={`${stack.hoverColor} duration-300`}>
        {stack.icon}
      </div>
      {stack.label && (
        <p className={`hidden sm:block text-xs text-muted-foreground`}>
          {stack.label}
        </p>
      )}
    </div>
  );
}

export default TechItem;